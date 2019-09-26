import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

@Component({
  selector: "mhw-mhw-select-pop",
  templateUrl: "./mhw-select-pop.component.html"
})
export class MhwSelectPopComponent implements OnChanges {
  public selectedRank = "high";
  public filterInput = "";
  public itemsToShow: any = null;

  @Input() open = false;
  @Input() items: any = null;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.items = changes.items.currentValue;

      if ("object" === typeof this.items) {
        const { low, high, master } = this.items;

        this.itemsToShow = {
          low: low,
          high: high,
          master: master
        };
      }
    }

    if (changes.isOpen && null !== this.items) {
      this.open = changes.open.currentValue;
    }
  }

  public emitSelection(item: any) {
    this.selectedItem.emit(item);
  }

  public filterItems() {
    if (3 > this.filterInput.length) {
      this.itemsToShow[this.selectedRank] = this.items[this.selectedRank];

      return;
    }

    this.itemsToShow[this.selectedRank] = this.itemsToShow[this.selectedRank].filter((item) =>
      item.name.toLowerCase().includes(this.filterInput.toLowerCase())
    );
  }

}
