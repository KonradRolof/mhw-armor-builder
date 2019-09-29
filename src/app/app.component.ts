import { Component, OnInit } from "@angular/core";
import { MhwDataService } from "./service/mhw-data.service";
import {Observable} from "rxjs";
import CurSet from "../interface/cur-set.interface";
import ArmorSet from "../interface/armor-set.interface";
import ArmorSetsObject from "../interface/armor-sets-object.interface";
import ArmorPiece from "../interface/armor-piece.interface";
import ArmorPiecesObject from "../interface/armor-pieces-object.interface";
import DataObject from "../interface/data-object.interface";
import Skill from "../interface/skill.interface";
import Decoration from "../interface/decoration.interface";
import CurSetPiece from "../interface/cur-set-piece.interface";
import Charm from "../interface/charm.interface";
import CurSetPieceSlot from "../interface/cur-set-piece-slot.interface";

@Component({
  selector: "mhw-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [MhwDataService]
})
export class AppComponent implements OnInit {
  title = "mhw-armor-builder";

  public skills: Skill[] = [];
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
  public data: DataObject = {
    armors: this.armorSets,
    pieces: this.armorPieces,
    skills: this.skills,
    decorations: this.decorations,
    charms: this.charms
  };

  public isLoading: boolean;
  public selectedRank = "high";
  public openedArmorSet: number = null;
  public curSet: CurSet = {
    head: null,
    chest: null,
    gloves: null,
    waist: null,
    legs: null,
    charm: null
  };

  private skillsReady = false;
  private decorationsReady = false;
  private charmsReadyy = false;

  constructor(private mhwDataService: MhwDataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getArmorSets();
    this.getArmorPieces();
    this.getSkills();
    this.getDecorations();
    this.getCharms();
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

  public toggleCharmOrWeapon(item: Charm, type: "charm" | "weapon") {
    if ("charm" === type) {
      if (null !== this.curSet[type]) {
        if (this.curSet.charm.piece.id === item.id) {
          this.curSet.charm = null;
        } else {
          this.setCharm(item);
        }
      } else {
        this.setCharm(item);
      }
    }

    if ("weapon" === type) {
      // @TODO add weapon
    }
  }

  public postSetToStats(curSet: any) {
    this.curSet = curSet;
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
  }

  private setCharm(piece: Charm) {
    this.curSet.charm = { piece } as CurSetPiece;
  }

  private loadingCallback() {
    if (
      true === this.armorSets.ready &&
      true === this.armorPieces.ready &&
      true === this.skillsReady &&
      true === this.decorationsReady &&
      true === this.charmsReadyy
    ) {
      this.isLoading = false;
    }
  }

  private getArmorSets() {
    const armorSetData$: Observable<any> = this.mhwDataService.getData("/assets/data/armor-sets.json");

    armorSetData$.subscribe(
      (data) => {
        const armorSets = data as ArmorSet[];

        armorSets.map((set) => {
          this.armorSets[set.rank].push(set);
        });
      },
      (error) => {
        // @TODO adds error handling
      },
      () => {
        this.armorSets.ready = true;
        this.loadingCallback();
      }
    );
  }

  private getArmorPieces() {
    const armorPieceData$: Observable<any> = this.mhwDataService.getData("/assets/data/armor-pieces.json");

    armorPieceData$.subscribe(
      (data) => {
        const armorPieces = data as ArmorPiece[];

        armorPieces.map((piece) => {
          this.armorPieces[piece.rank].push(piece);
        });
      },
      (error) => {
        // @TODO adds error handling
      },
      () => {
        this.armorPieces.ready = true;
        this.loadingCallback();
      }
    );
  }

  private getSkills() {
    const skillsData$: Observable<any> = this.mhwDataService.getData("/assets/data/skills.json");

    skillsData$.subscribe(
      (data) => {
        const skills = data as Skill[];

        skills.map((skill) => {
          this.skills.push(skill);
        });
      },
      (error) => {
        // @TODO adds error handling
      },
      () => {
        this.skillsReady = true;
        this.loadingCallback();
      }
    );
  }

  private getDecorations() {
    const decorationsData$: Observable<any> = this.mhwDataService.getData("/assets/data/decorations.json");

    decorationsData$.subscribe(
      (data) => {
        const decorations = data as Decoration[];

        decorations.map((decoration) => {
          this.decorations.push(decoration);
        });
      },
      (error) => {
        // @TODO adds error handling
      },
      () => {
        this.decorationsReady = true;
        this.loadingCallback();
      }
    );
  }

  private getCharms() {
    const charmsData$: Observable<any> = this.mhwDataService.getData("/assets/data/charms.json");

    charmsData$.subscribe(
      (data) => {
        const charms = data as Charm[];

        charms.map((charm) => {
          this.charms.push(charm);
        });
      },
      (error) => {
        // @TODO adds error handling
      },
      () => {
        this.charmsReadyy = true;
        this.loadingCallback();
      }
    );
  }
}
