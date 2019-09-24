import { Component } from '@angular/core';
import dataObject from "../data/index";
import Armor from "../interface/armor.interface";

@Component({
  selector: 'mhw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mhw-armor-builder';
  data = dataObject;
  armors: Armor[] = dataObject.armors;
}
