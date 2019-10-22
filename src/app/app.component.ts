import { Component, OnInit } from "@angular/core";
import { MhwDataService } from "./service/mhw-data.service";
import {Observable} from "rxjs";
import CurSet from "./interface/app/cur-set.interface";
import ArmorSetsObject from "./interface/app/armor-sets-object.interface";
import ArmorPiecesObject from "./interface/app/armor-pieces-object.interface";
import DataObject from "./interface/app/data-object.interface";
import CurSetPiece from "./interface/app/cur-set-piece.interface";
import CurSetPieceSlot from "./interface/app/cur-set-piece-slot.interface";
import ArmorSet from "./interface/data/armor-set.interface";
import ArmorPiece from "./interface/data/armor-piece.interface";
import Skill from "./interface/data/skill.interface";
import Decoration from "./interface/data/decoration.interface";
import Charm from "./interface/data/charm.interface";
import Weapon from "./interface/data/weapon.interface";
import {MhwSortingService} from "./service/mhw-sorting.service";
import {MhwStorageService} from "./service/mhw-storage.service";

@Component({
  selector: "mhw-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [MhwDataService]
})
export class AppComponent implements OnInit {
  title = "mhw-armor-builder";

  public skills: Skill[] = [];
  public weaponTypes = [
    { type: "all", label: "All" },
    { type: "great-sword", label: "Gread Sword" },
    { type: "dual-blades", label: "Dual Blades" },
    { type: "lance", label: "Lance" },
    { type: "charge-blade", label: "Charge Blade" },
    { type: "heavy-bowgun", label: "Heavy Bowgun" },
    { type: "long-sword", label: "Long Sword" },
    { type: "hammer", label: "Hammer" },
    { type: "gunlance", label: "Gunlance" },
    { type: "insect-glaive", label: "Insect Glaive" },
    { type: "bow", label: "Bow"},
    { type: "hunting-horn", label: "Hunting Horn" },
    { type: "switch-axe", label: "Switch Axe" },
    { type: "light-bowgun", label: "Light Bowgun" }
  ];
  public currentWeaponType: string;
  public armorSets: ArmorSetsObject = {
    low: [],
    high: [],
    master: [],
    ready: false
  };
  public armorPieces: ArmorPiecesObject = {
    low: [],
    high: [],
    master: [],
    ready: false
  };
  public charms: Charm[] = [];
  public decorations: Decoration[] = [];
  public weapons: Weapon[] = [];
  public weaponsToShow: Weapon[] = [];
  public data: DataObject = {
    armors: this.armorSets,
    pieces: this.armorPieces,
    skills: this.skills,
    decorations: this.decorations,
    charms: this.charms,
    weapons: this.weapons
  };

  public sidebarOpen = false;
  public forceRefresh = false;
  public isLoading: boolean;
  public hasDataError = false;
  public dataErrorMessage: string;
  public selectedRank = "high";
  public rankSelection = "high";
  public openedArmorSet: number = null;
  public curSet: CurSet = {
    weapon: null,
    head: null,
    chest: null,
    gloves: null,
    waist: null,
    legs: null,
    charm: null,
    charmRank: 0
  };

  private skillsReady = false;
  private decorationsReady = false;
  private charmsReady = false;
  private weaponsReady = false;

  constructor(private mhwDataService: MhwDataService) {
    MhwStorageService.getAndUse("item-rank", (rank) => {
      if (null !== rank) {
        this.selectedRank = rank;
        this.rankSelection = rank;
      }
    });
  }

  ngOnInit(): void {
    this.currentWeaponType = this.weaponTypes[0].type;
    this.isLoading = true;
    this.getData("/assets/data/armor-sets.json", "armorSets");
    this.getData("/assets/data/armor-pieces.json", "armorPieces");
    this.getData("/assets/data/skills.json", "skills");
    this.getData("/assets/data/decorations.json", "decorations");
    this.getData("/assets/data/charms.json", "charms");
    this.getData("/assets/data/weapons.json", "weapons");
  }

  public switchRank(rank: string) {
    MhwStorageService.setItem("item-rank", rank);
    this.selectedRank = rank;
  }

  public switchWeaponType(type: string) {
    MhwStorageService.setItem("weapon-type", type);
    this.filterWeapons(type);
  }

  public toggleArmorSub(armorSet: ArmorSet) {
    if (this.openedArmorSet === armorSet.id) {
      this.openedArmorSet = null;
    } else {
      this.openedArmorSet = this.armorSets[this.selectedRank].find((item) => item.id === armorSet.id).id;
    }
  }

  public toggleArmorPart(part: ArmorPiece, type: string) {
    const piece = this.armorPieces[part.rank].find((item) => item.id === part.id);

    if (null !== this.curSet[type]) {
      if (this.curSet[type].piece.id === piece.id) {
        this.curSet[type] = null;
      } else {
        this.setArmorPiece(piece, type);
      }
    } else {
      this.setArmorPiece(piece, type);
    }
  }

  public toggleCharmOrWeapon(item: Charm | Weapon, type: "charm" | "weapon") {
    if ("charm" === type) {
      const charm = item as Charm;

      this.curSet.charmRank = 0;

      if (null !== this.curSet[type]) {
        if (this.curSet.charm.piece.id === charm.id) {
          this.curSet.charm = null;
        } else {
          this.setCharm(charm);
        }
      } else {
        this.setCharm(charm);
      }
    }

    if ("weapon" === type) {
      const weapon = item as Weapon;

      if (null !== this.curSet[type]) {
        if (this.curSet.weapon.piece.id === weapon.id) {
          this.curSet.charm = null;
        } else {
          this.setWeapon(weapon);
        }
      } else {
        this.setWeapon(weapon);
      }
    }
  }

  public postSetToStats(curSet: any) {
    this.curSet = curSet;
    this.forceRefresh = true;
  }

  public readRefresh(response: boolean) {
    this.forceRefresh = response;
  }

  private handleLoadError(error: any) {
    this.hasDataError = true;
    this.dataErrorMessage = error.message;
  }

  private filterWeapons(type: string) {
    let weapons = this.weapons;

    if (this.weaponTypes[0].type !== type) {
      weapons = weapons.filter((weapon) => weapon.type === type);
    }

    this.weaponsToShow = weapons;
  }

  private setArmorPiece(piece: ArmorPiece, type: string) {
    const setPiece = { piece } as CurSetPiece;

    if (piece.slots) {
      setPiece.slots = [];
      piece.slots.map((slot) => {
        setPiece.slots.push({ slot } as CurSetPieceSlot);
      });
    }

    this.curSet[type] = setPiece;
    this.forceRefresh = true;
  }

  private setCharm(piece: Charm) {
    this.curSet.charm = { piece } as CurSetPiece;
    this.forceRefresh = true;
  }

  private setWeapon(piece: Weapon) {
    this.curSet.weapon = { piece } as CurSetPiece;
    this.forceRefresh = true;
  }

  private loadingCallback(type: string) {
    switch (type) {
      case "armorSets":
        this.armorSets.ready = true;
        break;

      case "armorPieces":
        this.armorPieces.ready = true;
        break;

      case "skills":
        this.skillsReady = true;
        break;

      case "decorations":
        this.decorationsReady = true;
        break;

      case "charms":
        this.charmsReady = true;
        break;

      case "weapons":
        this.weaponsReady = true;
        break;
    }

    if (
      true === this.armorSets.ready &&
      true === this.armorPieces.ready &&
      true === this.skillsReady &&
      true === this.decorationsReady &&
      true === this.charmsReady &&
      true === this.weaponsReady
    ) {
      this.isLoading = false;
    }
  }

  private getData(url: string, type: "armorSets" | "armorPieces" | "skills" | "decorations" | "charms" | "weapons") {
    const data$: Observable<any> = this.mhwDataService.getData(url);

    data$.subscribe(
      (data) => {
        this.handleData(data, type);
      },
      (error) => {
        this.handleLoadError(error);
      },
      () => {
        this.loadingCallback(type);
      }
    );
  }

  private handleData(data: any, type: "armorSets" | "armorPieces" | "skills" | "decorations" | "charms" | "weapons") {
    switch (type) {
      case "armorSets":
        const armorSets = data as ArmorSet[];
        armorSets.map((set: ArmorSet) => {
          if (0 < set.pieces.length) {
            set.rarity = set.pieces[0].rarity;
            this.armorSets[set.rank].push(set);
          }
        });

        this.armorSets.low = MhwSortingService.sortArmorsByRarity(this.armorSets.low);
        this.armorSets.high = MhwSortingService.sortArmorsByRarity(this.armorSets.high);
        this.armorSets.master = MhwSortingService.sortArmorsByRarity(this.armorSets.master);
        break;

      case "armorPieces":
        const armorPieces = data as ArmorPiece[];
        armorPieces.map((piece) => {
          this.armorPieces[piece.rank].push(piece);
        });
        break;

      case "skills":
        const skills = data as Skill[];
        skills.map((skill) => {
          this.skills.push(skill);
        });
        break;

      case "decorations":
        const decorations = data as Decoration[];
        decorations.map((decoration) => {
          this.decorations.push(decoration);
        });
        break;

      case "charms":
        const charms = data as Charm[];
        charms.map((charm) => {
          charm.type = "charm";
          this.charms.push(charm);
        });
        break;

      case "weapons":
        const weapons = data as Weapon[];
        const currentType = MhwStorageService.getItem("weapon-type");

        console.log(currentType);

        weapons.map((weapon) => {
          this.weapons.push(weapon);
          this.weaponsToShow.push(weapon);
        });
        this.weapons = MhwSortingService.sortWeaponsByRarity(this.weapons);
        this.weaponsToShow = MhwSortingService.sortWeaponsByRarity(this.weaponsToShow);

        if (null !== currentType) {
          this.currentWeaponType = currentType;
          this.filterWeapons(currentType);
        }

        break;
    }
  }
}
