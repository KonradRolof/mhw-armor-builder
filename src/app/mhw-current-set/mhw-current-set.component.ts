import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import CurSet from "../../interface/cur-set.interface";
import DataObject from "../../interface/data-object.interface";
import Armor from "../../interface/armor.interface";
import ArmorPart from "../../interface/armor-part.interface";

@Component({
  selector: "mhw-mhw-current-set",
  templateUrl: "./mhw-current-set.component.html"
})
export class MhwCurrentSetComponent implements OnInit, OnChanges {
  public currentSet: CurSet = {
    head: null,
    body: null,
    arms: null,
    hip: null,
    legs: null
  };
  public popOpen = false;
  public itemsForPop: any[];
  @Input() dataObj: DataObject;
  @Input() curSet: CurSet;
  @Input() resetSelection: boolean;
  @Output() setChanged: EventEmitter<CurSet> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resetSelection = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.resetSelection) {
      if (true === changes.resetSelection.currentValue) {
        // @TODO reset selection
      }
    }

    if (changes.curSet) {
      this.currentSet = changes.curSet.currentValue || {};
    }
  }

  public openSelectPop(itemType: string) {
    switch (itemType) {
      case "head":
        this.itemsForPop = this.dataObj.armors.map((armor) => armor.head);
        break;

      case "body":
        this.itemsForPop = this.dataObj.armors.map((armor) => armor.body);
        break;

      case "arms":
        this.itemsForPop = this.dataObj.armors.map((armor) => armor.arms);
        break;

      case "hip":
        this.itemsForPop = this.dataObj.armors.map((armor) => armor.hip);
        break;

      case "legs":
        this.itemsForPop = this.dataObj.armors.map((armor) => armor.legs);
        break;
    }

    this.popOpen = true;
  }

  public processSelection(response: any) {
    this.popOpen = false;

    if (null !== response) {
      this.currentSet[response.type] = response;
      this.emitSelectionChange();
    }
  }

  public removeItem(item: ArmorPart) {
    this.currentSet[item.type] = null;
    this.emitSelectionChange();
  }

  private emitSelectionChange() {
    this.setChanged.emit(this.currentSet);
  }

}
