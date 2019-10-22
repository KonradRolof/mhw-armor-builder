import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import { MhwSortingService } from "../service/mhw-sorting.service";
import CurSet from "../interface/app/cur-set.interface";
import DataObject from "../interface/app/data-object.interface";
import SkillSet from "../interface/app/skill-set.interface";
import CurSetPiece from "../interface/app/cur-set-piece.interface";
import CurSetPieceSlot from "../interface/app/cur-set-piece-slot.interface";
import Offence from "../interface/app/offence.interface";
import SkillRank from "../interface/data/skill-rank.interface";
import ArmorPiece from "../interface/data/armor-piece.interface";
import Decoration from "../interface/data/decoration.interface";
import Resistances from "../interface/data/resistances.interface";
import Weapon from "../interface/data/weapon.interface";
import Charm from "../interface/data/charm.interface";
import CharmRank from "../interface/data/charm-rank.interface";
import SetSkill from "../interface/app/set-skill.interface";

@Component({
  selector: "mhw-stats",
  templateUrl: "./mhw-stats.component.html"
})
export class MhwStatsComponent implements OnInit, OnChanges {
  public currentSet: CurSet;
  public skills: SkillSet[] = [];
  public resistances: Resistances;
  public defense: number;
  public offence: Offence;
  public setBonuses: SetSkill[];

  public armorPieces = ["head", "chest", "gloves", "waist", "legs"];
  public elements = ["fire", "water", "ice", "thunder", "dragon"];

  private decorations: Decoration[] = [];

  @Input() dataObj: DataObject;
  @Input() forceRefresh: boolean;
  @Input() curSet: CurSet;
  @Output() resetRefresh: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resetStats();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.curSet) {
      this.currentSet = changes.curSet.currentValue || {};
    }

    if (changes.forceRefresh) {
      this.readSet();
    }
  }

  private resetStats() {
    const elements = [];

    this.offence = {
      health: 100,
      attack: 0,
      affinity: 0,
      handicraftLevel: 0,
      maxHandicraft: 0,
      elements
    };
    this.skills = [];
    this.decorations = [];
    this.defense = 0;
    this.resistances = {
      fire: 0,
      water: 0,
      ice: 0,
      thunder: 0,
      dragon: 0
    };
    this.setBonuses = [];
  }

  private readSet() {
    this.resetStats();

    for (const key in this.currentSet) {
      if (this.currentSet.hasOwnProperty(key)) {
        if ("object" === typeof this.currentSet[key]) {
          this.readSetPiece(this.currentSet[key] as CurSetPiece);
        }
      }
    }

    this.applyDecoSkills();
    MhwSortingService.sortSkillsByLevel(this.skills);

    // handle skill modifiers
    this.skills.map((skill) => this.applySkillModifiers(skill.skill.ranks[skill.level - 1]));
    this.setBonuses.map((bonus) => {
      if (bonus.active) {
        console.log(bonus.bonusRank.skill);
        this.applySkillModifiers(bonus.bonusRank.skill);
      }
    });

    setTimeout(() => {
      this.resetRefresh.emit(false);
    }, 1);
  }

  private readSetPiece(setPiece: CurSetPiece) {
    if (null === setPiece) {
      return;
    }

    if (this.armorPieces.includes(setPiece.piece.type)) {
      this.handleArmorPiece(setPiece.piece as ArmorPiece);
    } else if ("charm" === setPiece.piece.type) {
      this.handleCharm(setPiece.piece as Charm);
    } else {
      this.handleWeapon(setPiece.piece as Weapon);
    }

    // handle decorations
    if (setPiece.slots) {
      setPiece.slots.map((slot) => this.addDeco(slot));
    }
  }

  private handleSetBonus(armorPiece: ArmorPiece) {
    const set = this.dataObj.armors[armorPiece.rank].find((item) => item.id === armorPiece.armorSet.id);

    if (null === set.bonus) {
      return;
    }

    if (this.setBonuses.find((item) => item.bonus.id === set.bonus.id)) {
      const currentSet = this.setBonuses.find((item) => item.bonus.id === set.bonus.id);

      currentSet.current += 1;

      currentSet.bonus.ranks.map((rank) => {
        if (rank.pieces <= currentSet.current) {
          currentSet.bonusRank = rank;
          currentSet.active = true;
        }
      });

      this.setBonuses.find((item) => item.bonus.id === set.bonus.id).current = currentSet.current;
    } else {
      const setSkill: SetSkill = {
        setName: set.name.replace(/Alpha|Beta|Gamma/g, ""),
        current: 1,
        bonus: set.bonus,
        bonusRank: set.bonus.ranks[0],
        active: false
      };

      this.setBonuses.push(setSkill);
    }

    this.setBonuses = MhwSortingService.sortSetBonuses(this.setBonuses);
  }

  private handleArmorPiece(armorPiece: ArmorPiece) {
    const { skills } = armorPiece;

    // handle set bonus
    this.handleSetBonus(armorPiece);

    // get armor set skills
    skills.map((skill) => this.addSkill(skill));

    // calculate base defense value
    this.defense += armorPiece.defense.base;

    // calculate resistances
    if (armorPiece.resistances) {
      this.elements.map((element) => {
        if (
          armorPiece.resistances.hasOwnProperty(element) &&
          this.resistances.hasOwnProperty(element)
        ) {
          this.resistances[element] += armorPiece.resistances[element];
        }
      });
    }
  }

  private handleWeapon(weapon: Weapon) {
    this.offence.attack = weapon.attack.display;
    if (weapon.attributes) {
      this.offence.affinity = weapon.attributes.affinity || 0;
    }

    if (weapon.elements) {
      weapon.elements.map((element) => {
        this.offence.elements.push({ ...element });
      });
    }

    if (weapon.durability) {
      this.offence.sharpness = weapon.durability;
      this.offence.maxHandicraft = weapon.durability.length;
    } else if (weapon.sharpness) {
      this.offence.sharpness[0] = weapon.sharpness;
      this.offence.maxHandicraft = 0;
    }
  }

  private handleCharm(charm: Charm) {
    const charmRank: CharmRank = charm.ranks[this.currentSet.charmRank];

    charmRank.skills.map((skill) => this.addSkill(skill));
  }

  private addSkill(skill: SkillRank) {
    const realSkill = this.dataObj.skills.find((item) => item.id === skill.skill);

    if (this.skills.find((item) => item.id === realSkill.id)) {
      const newLevel = this.skills.find((item) => item.id === realSkill.id).trueLevel += skill.level;

      this.skills.find((item) => item.id === realSkill.id).trueLevel = newLevel;
      this.skills.find((item) => item.id === realSkill.id).level = newLevel <=
        this.skills.find((item) => item.id === realSkill.id).max ? newLevel :
        this.skills.find((item) => item.id === realSkill.id).max;
      this.skills.find((item) => item.id === realSkill.id).levelArray =
        Array(this.skills.find((item) => item.id === realSkill.id).level).fill(1).map((value, n) => n);
    } else {
      const skillSet: SkillSet = {
        id: realSkill.id,
        skill: { ...realSkill },
        max: realSkill.ranks.length,
        level: skill.level,
        trueLevel: skill.level,
        levelArray: Array(skill.level).fill(1).map((n) => n)
      };

      this.skills.push(skillSet);
    }
  }

  private addDeco(slot: CurSetPieceSlot) {
    if (slot.decoration) {
      this.decorations.push(slot.decoration);
    }
  }

  private applyDecoSkills() {
    this.decorations.map((decoration) => {
      decoration.skills.map((skill) => this.addSkill(skill));
    });
  }

  private applySkillModifiers(skillRank: SkillRank) {
    const { modifiers } = skillRank;

    // simple modifiers
    if (modifiers.hasOwnProperty("attack") && 0 < this.offence.attack) {
      this.offence.attack += modifiers.attack;
    }

    if (modifiers.hasOwnProperty("affinity") && 0 < this.offence.attack) {
      this.offence.affinity += modifiers.affinity;
    }

    if (modifiers.hasOwnProperty("defense") && 0 < this.defense) {
      this.defense += modifiers.defense;
    }

    if (modifiers.hasOwnProperty("health")) {
      this.offence.health += modifiers.health;
    }

    // elemental attack modifiers
    if (modifiers.hasOwnProperty("damageFire") && 0 < this.offence.elements.length) {
      this.applyElementDamage(modifiers.damageFire, "fire");
    }

    if (modifiers.hasOwnProperty("damageWater") && 0 < this.offence.elements.length) {
      this.applyElementDamage(modifiers.damageWater, "water");
    }

    if (modifiers.hasOwnProperty("damageIce") && 0 < this.offence.elements.length) {
      this.applyElementDamage(modifiers.damageIce, "ice");
    }

    if (modifiers.hasOwnProperty("damageThunder") && 0 < this.offence.elements.length) {
      this.applyElementDamage(modifiers.damageThunder, "thunder");
    }

    if (modifiers.hasOwnProperty("damageDragon") && 0 < this.offence.elements.length) {
      this.applyElementDamage(modifiers.damageDragon, "dragon");
    }

    // elemental resistance modifiers
    if (modifiers.hasOwnProperty("resistAll")) {
      this.resistances.fire += modifiers.resistAll;
      this.resistances.water += modifiers.resistAll;
      this.resistances.ice += modifiers.resistAll;
      this.resistances.thunder += modifiers.resistAll;
      this.resistances.dragon += modifiers.resistAll;
    }

    if (modifiers.hasOwnProperty("resistFire")) {
      this.resistances.fire += modifiers.resistFire;
    }

    if (modifiers.hasOwnProperty("resistWater")) {
      this.resistances.water += modifiers.resistWater;
    }

    if (modifiers.hasOwnProperty("resistIce")) {
      this.resistances.ice += modifiers.resistIce;
    }

    if (modifiers.hasOwnProperty("resistThunder")) {
      this.resistances.thunder += modifiers.resistThunder;
    }

    if (modifiers.hasOwnProperty("resistDragon")) {
      this.resistances.dragon += modifiers.resistDragon;
    }

    // sharpness modifier
    if (modifiers.hasOwnProperty("sharpnessBonus")) {
      this.offence.handicraftLevel = modifiers.sharpnessBonus / 10;
    }

    // hidden ranks
    if (modifiers.hasOwnProperty("hiddenRanks")) {
      const id = modifiers.hiddenRanks;

      this.skills.find((skill) => skill.id === id).skill.hiddenRanks.map((rank) => {
        rank.isHidden = true;
        this.skills.find((skill) => skill.id === id).skill.ranks.push(rank);
      });
    }
  }

  private applyElementDamage(modifier: number|string, elementType: string) {
    let damageNum;
    let damagePercent = 100;

    if ("number" === typeof modifier) {
      damageNum = modifier;
    } else {
      const damage = modifier.split("+");
      damageNum = parseInt(damage[0], 10);
      damagePercent += parseInt(damage[1], 10);
    }

    this.offence.elements.map((element) => {
      if (element.type === elementType) {
        element.damage += damageNum;
        element.damage = Math.floor(element.damage * (damagePercent / 100));
      }
    });
  }

}
