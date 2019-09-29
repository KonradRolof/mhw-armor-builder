import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import CurSet from "../../interface/cur-set.interface";
import DataObject from "../../interface/data-object.interface";
import SkillSet from "../../interface/skill-set.interface";
import Decoration from "../../interface/decoration.interface";
import SkillRank from "../../interface/skill-rank.interface";
import CurSetPiece from "../../interface/cur-set-piece.interface";

@Component({
  selector: "mhw-stats",
  templateUrl: "./mhw-stats.component.html"
})
export class MhwStatsComponent implements OnInit, OnChanges {
  public currentSet: CurSet;
  public skills: SkillSet[];

  private decorations: Decoration[];

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
    for (const key in this.currentSet) {
      if (this.currentSet[key]) {
        const piece = this.currentSet[key] as CurSetPiece;

        console.log(piece);
      }
    }

    setTimeout(() => {
      this.resetRefresh.emit(false);
    }, 1);
  }

  private addSkill(skill: SkillRank) {
    const skillItem = this.dataObj.skills.find((item) => item.id === skill.skill);

    if (this.skills.find((item) => item.id === skillItem.id)) {
      this.skills.find((item) => item.id === skillItem.id).level += skill.level;
    } else {
      this.skills.push({
        id: skillItem.id,
        skill: skillItem,
        max: skillItem.ranks.length,
        level: skill.level
      } as SkillSet);
    }
  }

  private addDeco(decoration: Decoration) {
    this.decorations.push(decoration);
  }

}
