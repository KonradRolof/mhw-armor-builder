import ArmorPiecesObject from "./armor-pieces-object.interface";
import Charm from "./charm.interface";
import Decoration from "./decoration.interface";
import SlotSelection from "./slot-selection.interface";
import Weapon from "./weapon.interface";

export default interface SelectionPopData {
  type: "armor" | "weapon" | "charm" | "decoration";
  items: ArmorPiecesObject | Decoration[] | Charm[] | Weapon[];
  rankSelectable: boolean;
  slot?: SlotSelection;
}
