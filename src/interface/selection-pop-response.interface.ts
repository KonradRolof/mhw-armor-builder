import ArmorPiece from "./armor-piece.interface";
import Decoration from "./decoration.interface";
import SlotSelection from "./slot-selection.interface";
import Charm from "./charm.interface";

export default interface SelectionPopResponse {
  type: "armor" | "weapon" | "charm" | "decoration";
  item: ArmorPiece | Decoration | Charm;
  slot?: SlotSelection;
}
