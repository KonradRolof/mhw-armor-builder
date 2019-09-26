import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import CurSet from "../../interface/cur-set.interface";
import DataObject from "../../interface/data-object.interface";
import ArmorPiece from "../../interface/armor-piece.interface";
import ArmorPiecesObject from "../../interface/armor-pieces-object.interface";

@Component({
  selector: "mhw-mhw-current-set",
  templateUrl: "./mhw-current-set.component.html"
})
export class MhwCurrentSetComponent implements OnInit, OnChanges {
  public currentSet: CurSet = {
    head: null,
    chest: null,
    gloves: null,
    waist: null,
    legs: null
  };
  public levelOneParts = [
    {
      label: "Head Armor",
      part: "head",
      isArmor: true
    },
    {
      label: "Chest Armor",
      part: "chest",
      isArmor: true
    },
    {
      label: "Gloves Armor",
      part: "gloves",
      isArmor: true
    },
    {
      label: "Waist Armor",
      part: "waist",
      isArmor: true
    },
    {
      label: "Legs Armor",
      part: "legs",
      isArmor: true
    }
  ];

  public popOpen = false;
  public itemsForPop: any;

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

  public openSelectPop(itemType: string, isArmor = false) {
    if (isArmor) {
      const pieces = this.dataObj.pieces;
      const piecesObject: ArmorPiecesObject = {
        low: [],
        high: [],
        master: [],
        ready: true
      };

      piecesObject.low = pieces.low.filter((item) => item.type === itemType);
      piecesObject.high = pieces.high.filter((item) => item.type === itemType);
      piecesObject.master = pieces.master.filter((item) => item.type === itemType);

      this.itemsForPop = piecesObject;
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

  public removeItem(item: ArmorPiece) {
    this.currentSet[item.type] = null;
    this.emitSelectionChange();
  }

  private emitSelectionChange() {
    this.setChanged.emit(this.currentSet);
  }

}
