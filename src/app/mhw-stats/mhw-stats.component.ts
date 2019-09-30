import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import CurSet from "../../interface/cur-set.interface";
import DataObject from "../../interface/data-object.interface";
import SkillSet from "../../interface/skill-set.interface";
import Decoration from "../../interface/decoration.interface";
import SkillRank from "../../interface/skill-rank.interface";
import CurSetPiece from "../../interface/cur-set-piece.interface";
import ArmorPiece from "../../interface/armor-piece.interface";
import CurSetPieceSlot from "../../interface/cur-set-piece-slot.interface";

@Component({
  selector: "mhw-stats",
  templateUrl: "./mhw-stats.component.html"
})
export class MhwStatsComponent implements OnInit, OnChanges {
  public currentSet: CurSet;
  public skills: SkillSet[] = [];

  private decorations: Decoration[] = [];

  @Input() dataObj: DataObject;
  @Input() forceRefresh: boolean;
  @Input() curSet: CurSet;
  @Output() resetRefresh: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.curSet) {
      this.currentSet = changes.curSet.currentValue || {};
    }

    if (changes.forceRefresh) {
      this.readSet();
    }
  }

  private readSet() {
    this.skills = [];
    this.decorations = [];

    for (const key in this.currentSet) {
      if (this.currentSet.hasOwnProperty(key)) {
        this.readSetPiece(this.currentSet[key] as CurSetPiece);
      }
    }

    this.applyDecoSkills();

    setTimeout(() => {
      this.resetRefresh.emit(false);
    }, 1);
  }

  private readSetPiece(setPiece: CurSetPiece) {
    const armorPieces = ["head", "chest", "gloves", "waist", "legs"];

    if (null === setPiece) {
      return;
    }

    if (armorPieces.includes(setPiece.piece.type)) {
      this.handleArmorPiece(setPiece.piece as ArmorPiece);
    } else if ("charm" === setPiece.piece.type) {
      // @TODO handle charm
    } else {
      // @TODO handle weapon
    }

    // handle decorations
    if (setPiece.slots) {
      setPiece.slots.map((slot) => this.addDeco(slot));
    }
  }

  private handleArmorPiece(armorPiece: ArmorPiece) {
    const { skills } = armorPiece;

    skills.map((skill) => this.addSkill(skill));
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
        skill: realSkill,
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

}
