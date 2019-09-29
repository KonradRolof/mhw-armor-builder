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
  public decorations: Decoration[] = [];
  public data: DataObject = {
    armors: this.armorSets,
    pieces: this.armorPieces,
    skills: this.skills,
    decorations: this.decorations
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
  };

  private skillsReady = false;
  private decorationsReady = false;

  constructor(private mhwDataService: MhwDataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getArmorSets();
    this.getArmorPieces();
    this.getSkills();
    this.getDecorations();
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

    console.log(this.curSet);
  }

  public postSetToStats(curSet: any) {
    this.curSet = curSet;
  }

  private setArmorPiece(piece: ArmorPiece, type: string) {
    const setPiece = { piece } as CurSetPiece;

    if (piece.slots) {
      setPiece.slots = piece.slots.map((item) => item);
    }

    this.curSet[type] = setPiece;
  }

  private loadingCallback() {
    if (
      true === this.armorSets.ready &&
      true === this.armorPieces.ready &&
      true === this.skillsReady &&
      true === this.decorationsReady
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
}
