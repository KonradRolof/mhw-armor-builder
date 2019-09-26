import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import SelectionPopData from "../../interface/selection-pop-data.interface";
import ArmorPiecesObject from "../../interface/armor-pieces-object.interface";
import Decoration from "../../interface/decoration.interface";
import SelectionPopResponse from "../../interface/selection-pop-response.interface";

@Component({
  selector: "mhw-mhw-select-pop",
  templateUrl: "./mhw-select-pop.component.html"
})
export class MhwSelectPopComponent implements OnChanges {
  public rankSelectable = false;
  public selectedRank = "high";
  public rankSelect = "high";
  public filterInput = "";
  public itemsToShow: any = null;

  private storedItems: any = null;

  @Input() open = false;
  @Input() data: SelectionPopData = null;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && null !== changes.data.currentValue) {
      this.readDataObject(changes.data.currentValue);
    }

    if (changes.isOpen && null !== this.data) {
      this.open = changes.open.currentValue;
    }
  }

  public switchRank(value) {
    this.selectedRank = value;
  }

  public emitSelection(item: any) {
    let response = null;

    if (null !== item) {
      const type = this.data.type;
      response = {
        type,
        item
      } as SelectionPopResponse;

      if (this.data.slot) {
        response.slot = this.data.slot;
      }
    }

    this.selectedItem.emit(response);
    this.filterInput = "";
    this.data = null;
  }

  public filterItems() {
    this.itemsToShow[this.selectedRank] = [];
    this.itemsToShow[this.selectedRank] = this.storedItems[this.selectedRank].map((item) => item);

    this.itemsToShow[this.selectedRank] = this.itemsToShow[this.selectedRank].filter((item) =>
      item.name.toLowerCase().includes(this.filterInput.toLowerCase())
    );
  }

  private readDataObject(data: SelectionPopData) {
    this.data = data;

    switch (data.type) {
      case "armor":
        const { low, high, master } = data.items as ArmorPiecesObject;

        this.storedItems = {
          low,
          high,
          master
        };

        this.itemsToShow = {
          low,
          high,
          master
        };

        break;

      case "decoration":
        this.storedItems = {};
        this.storedItems[this.selectedRank] = data.items as Decoration[];
        this.storedItems[this.selectedRank] = this.storedItems[this.selectedRank].filter((item) => item.slot <= data.slot.rank);

        this.itemsToShow = {};
        this.itemsToShow[this.selectedRank] = this.storedItems[this.selectedRank].map((item) => item) as Decoration[];

        break;
    }

    this.rankSelectable = data.rankSelectable;
  }

}
