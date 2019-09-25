import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import CurSet from "../../interface/cur-set.interface";

@Component({
  selector: 'mhw-mhw-current-set',
  templateUrl: './mhw-current-set.component.html',
  styleUrls: ['./mhw-current-set.component.scss']
})
export class MhwCurrentSetComponent implements OnInit, OnChanges {
  public currentSet: CurSet = {
    head: null,
    body: null,
    arms: null,
    hip: null,
    legs: null
  };
  @Input() curSet: CurSet;
  @Input() resetSelection: boolean;
  @Output() setChanged: EventEmitter<CurSet> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resetSelection = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["resetSelection"]) {
      if (true === changes["resetSelection"].currentValue) {
        // @TODO reset selection
      }
    }

    if (changes["curSet"]) {
      this.currentSet = changes["curSet"].currentValue || {};
    }
  }

}
