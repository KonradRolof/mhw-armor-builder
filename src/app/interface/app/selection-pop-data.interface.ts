import ArmorPiecesObject from "./armor-pieces-object.interface";
import SlotSelection from "./slot-selection.interface";
import Charm from "../data/charm.interface";
import Decoration from "../data/decoration.interface";
import Weapon from "../data/weapon.interface";

export default interface SelectionPopData {
  type: "armor" | "weapon" | "charm" | "decoration";
  items: ArmorPiecesObject | Decoration[] | Charm[] | Weapon[];
  rankSelectable: boolean;
  slot?: SlotSelection;
}
