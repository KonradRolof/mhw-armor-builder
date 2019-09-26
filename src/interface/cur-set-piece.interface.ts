import ArmorPiece from "./armor-piece.interface";
import Decoration from "./decoration.interface";
import Slot from "./slot.interface";

export default interface CurSetPiece {
  piece: ArmorPiece;
  slots?: Array<Slot | Decoration>;
}
