import ArmorPiece from "./armor-piece.interface";
import Decoration from "./decoration.interface";
import SlotSelection from "./slot-selection.interface";
import Charm from "./charm.interface";
import Weapon from "./weapon.interface";

export default interface SelectionPopResponse {
  type: "armor" | "weapon" | "charm" | "decoration";
  item: ArmorPiece | Decoration | Charm | Decoration | Weapon;
  slot?: SlotSelection;
}
