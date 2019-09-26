import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

@Component({
  selector: "mhw-mhw-select-pop",
  templateUrl: "./mhw-select-pop.component.html"
})
export class MhwSelectPopComponent implements OnChanges {
  public selectedRank = "high";

  @Input() open = false;
  @Input() items: any[] = null;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.items = changes.items.currentValue;
    }

    if (changes.isOpen && null !== this.items) {
      this.open = changes.open.currentValue;
    }
  }

  public emitSelection(item: any) {
    this.selectedItem.emit(item);
  }

}
