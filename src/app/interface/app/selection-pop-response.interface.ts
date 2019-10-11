import SlotSelection from "./slot-selection.interface";
import ArmorPiece from "../data/armor-piece.interface";
import Decoration from "../data/decoration.interface";
import Charm from "../data/charm.interface";
import Weapon from "../data/weapon.interface";

export default interface SelectionPopResponse {
  type: "armor" | "weapon" | "charm" | "decoration";
  item: ArmorPiece | Decoration | Charm | Decoration | Weapon;
  slot?: SlotSelection;
}
