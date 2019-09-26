import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import CurSet from "../../interface/cur-set.interface";
import DataObject from "../../interface/data-object.interface";
import ArmorPiece from "../../interface/armor-piece.interface";
import ArmorPiecesObject from "../../interface/armor-pieces-object.interface";
import SlotSelection from "../../interface/slot-selection.interface";
import SelectionPopData from "../../interface/selection-pop-data.interface";
import SelectionPopResponse from "../../interface/selection-pop-response.interface";
import CurSetPiece from "../../interface/cur-set-piece.interface";

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
    legs: null,
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
  public itemsForPop: SelectionPopData = null;

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

  public openSelectPop(itemType: string, isSlot: SlotSelection = null) {
    const armorArray = ["head", "chest", "gloves", "waist", "legs"];
    const data: SelectionPopData = {
      type: null,
      items: null,
      rankSelectable: false
    };

    if (armorArray.includes(itemType)) {
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

      data.type = "armor";
      data.items = piecesObject;
      data.rankSelectable = true;

      this.itemsForPop = data;
    }

    if ("decoration" === itemType && null !== isSlot) {
      data.type = "decoration";
      data.items = this.dataObj.decorations;
      data.slot = isSlot;

      this.itemsForPop = data;
    }

    this.popOpen = true;
  }

  public processSelection(response: SelectionPopResponse) {
    this.popOpen = false;

    if (null !== response) {
      switch (response.type) {
        case "decoration":
          this.currentSet[`${response.slot.part}Slots`][response.slot.index] = response.item;
          break;

        case "armor":
          const piece = response.item as ArmorPiece;
          const setPiece = { piece } as CurSetPiece;

          // @TODO fix decoration selection

          if (piece.slots) {
            setPiece.slots = piece.slots.map((item) => item);
          }

          this.currentSet[piece.type] = setPiece;

          break;
      }

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
