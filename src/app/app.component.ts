import { Component } from "@angular/core";
import dataObject from "../data/index";
import Armor from "../interface/armor.interface";
import CurSet from "../interface/cur-set.interface";
import ArmorPart from "../interface/armor-part.interface";

@Component({
  selector: "mhw-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "mhw-armor-builder";
  public data = dataObject;
  public armors: Armor[] = dataObject.armors;
  public curSet: CurSet = {
    head: null,
    body: null,
    arms: null,
    hip: null,
    legs: null
  };

  public toggleArmorSub(armor: Armor) {
    this.armors.find((item) => item.id === armor.id).open = !armor.open;
  }

  public toggleArmorPart(part: ArmorPart) {
    const partType = part.type;

    if (null !== this.curSet[partType] && this.curSet[partType].id === part.id) {
      this.curSet[partType] = null;
    } else {
      this.curSet[partType] = part;
    }
  }

  public postSetToStats(curSet: any) {
    this.curSet = curSet;
  }
}
