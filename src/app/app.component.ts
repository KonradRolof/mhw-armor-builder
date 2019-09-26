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
  public data: DataObject = {
    armors: this.armorSets,
    pieces: this.armorPieces,
    skills: this.skills
  };

  public isLoading: boolean;
  public selectedRank = "high";
  public openedArmorSet: number = null;
  public curSet: CurSet = {
    head: null,
    chest: null,
    gloves: null,
    waist: null,
    legs: null
  };

  private skillsReady = false;

  constructor(private mhwDataService: MhwDataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getArmorSets();
    this.getArmorPieces();
    this.getSkills();
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

    if (null !== this.curSet[type] && this.curSet[type].id === piece.id) {
      this.curSet[type] = null;
    } else {
      this.curSet[type] = piece;
    }
  }

  public postSetToStats(curSet: any) {
    this.curSet = curSet;
  }

  private loadingCallback() {
    if (
      true === this.armorSets.ready &&
      true === this.armorPieces.ready &&
      true === this.skillsReady
    ) {
      this.isLoading = false;
    }
  }

  private getArmorSets() {
    const armorSetData$: Observable<any> = this.mhwDataService.getArmorSets("/assets/data/armor-sets.json");

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
    const armorPieceData$: Observable<any> = this.mhwDataService.getArmorPieces("/assets/data/armor-pieces.json");

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
    const skillsData$: Observable<any> = this.mhwDataService.getSkills("/assets/data/skills.json");

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
}
