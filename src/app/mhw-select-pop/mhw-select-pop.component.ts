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
  public filterInput = "";
  public itemsToShow: any = null;

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
    this.data = null;
  }

  public filterItems() {
    if (3 > this.filterInput.length) {
      this.itemsToShow[this.selectedRank] = this.data.items[this.selectedRank];

      return;
    }

    this.itemsToShow[this.selectedRank] = this.itemsToShow[this.selectedRank].filter((item) =>
      item.name.toLowerCase().includes(this.filterInput.toLowerCase())
    );
  }

  private readDataObject(data: SelectionPopData) {
    this.data = data;

    switch (data.type) {
      case "armor":
        const { low, high, master } = data.items as ArmorPiecesObject;

        this.itemsToShow = {
          low,
          high,
          master
        };

        break;

        case "decoration":
          this.selectedRank = "all";
          this.data.items = data.items as Decoration[];
          this.itemsToShow = {
            all: this.data.items.map((item) => item)
          };

          break;
    }

    this.rankSelectable = data.rankSelectable;
  }

}
