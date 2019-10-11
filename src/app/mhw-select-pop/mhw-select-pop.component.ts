import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import SelectionPopData from "../interface/app/selection-pop-data.interface";
import ArmorPiecesObject from "../interface/app/armor-pieces-object.interface";
import SelectionPopResponse from "../interface/app/selection-pop-response.interface";
import Decoration from "../interface/data/decoration.interface";
import Charm from "../interface/data/charm.interface";
import Weapon from "../interface/data/weapon.interface";

@Component({
  selector: "mhw-mhw-select-pop",
  templateUrl: "./mhw-select-pop.component.html"
})
export class MhwSelectPopComponent implements OnChanges {
  public rankSelectable = false;
  public selectedRank = "high";
  public rankSelect = "high";
  public weaponSelectable = false;
  public weaponTypes = [
    { type: "all", label: "All" },
    { type: "great-sword", label: "Gread Sword" },
    { type: "dual-blades", label: "Dual Blades" },
    { type: "lance", label: "Lance" },
    { type: "charge-blade", label: "Charge Blade" },
    { type: "heavy-bowgun", label: "Heavy Bowgun" },
    { type: "long-sword", label: "Long Sword" },
    { type: "hammer", label: "Hammer" },
    { type: "gunlance", label: "Gunlance" },
    { type: "insect-glaive", label: "Insect Glaive" },
    { type: "bow", label: "Bow"},
    { type: "hunting-horn", label: "Hunting Horn" },
    { type: "switch-axe", label: "Switch Axe" },
    { type: "light-bowgun", label: "Light Bowgun" }
  ];
  public currentWeaponType: string;
  public filterInput = "";
  public itemsToShow: any = null;

  private storedItems: any = null;

  @Input() open = false;
  @Input() data: SelectionPopData = null;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  public static sortDecorations(decorations: Decoration[]): Decoration[] {
    return decorations.sort((a, b) => {
      if (a.slot > b.slot) {
        return -1;
      }
      if (a.slot < b.slot) {
        return 1;
      }
      return 0;
    });
  }

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

    if (this.weaponSelectable && this.currentWeaponType !== this.weaponTypes[0].type) {
      this.itemsToShow[this.selectedRank] = this.itemsToShow[this.selectedRank].filter((item) => item.type === this.currentWeaponType );
    }

    this.itemsToShow[this.selectedRank] = this.itemsToShow[this.selectedRank].filter((item) =>
      item.name.toLowerCase().includes(this.filterInput.toLowerCase())
    );
    if ("decoration" === this.data.type) {
      this.itemsToShow[this.selectedRank] = MhwSelectPopComponent.sortDecorations(this.itemsToShow[this.selectedRank]);
    }
  }

  public switchWeaponType(type: string) {
    let weapons = this.storedItems[this.selectedRank];

    if (this.weaponTypes[0].type !== type) {
      weapons = weapons.filter((weapon) => weapon.type === type);
    }

    this.itemsToShow[this.selectedRank] = weapons;
  }

  private readDataObject(data: SelectionPopData) {
    this.data = data;
    this.weaponSelectable = false;

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
        this.itemsToShow[this.selectedRank] = MhwSelectPopComponent.sortDecorations(this.itemsToShow[this.selectedRank]);

        break;

      case "charm":
        this.storedItems = {};
        this.storedItems[this.selectedRank] = data.items as Charm[];

        this.itemsToShow = {};
        this.itemsToShow[this.selectedRank] = this.storedItems[this.selectedRank].map((item) => item) as Charm[];
        break;

      case "weapon":
        this.storedItems = {};
        this.storedItems[this.selectedRank] = data.items as Weapon[];

        this.itemsToShow = {};
        this.itemsToShow[this.selectedRank] = this.storedItems[this.selectedRank].map((item) => item) as Weapon[];
        this.weaponSelectable = true;
        this.currentWeaponType = this.weaponTypes[0].type;
    }

    this.rankSelectable = data.rankSelectable;
  }

}
