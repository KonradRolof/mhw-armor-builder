import ArmorPiece from "./armor-piece.interface";
import Charm from "./charm.interface";
import Decoration from "./decoration.interface";
import Slot from "./slot.interface";

export default interface CurSetPiece {
  piece: ArmorPiece | Charm;
  slots?: Array<Slot | Decoration>;
}
