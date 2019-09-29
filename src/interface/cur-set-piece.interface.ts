import ArmorPiece from "./armor-piece.interface";
import Charm from "./charm.interface";
import CurSetPieceSlot from "./cur-set-piece-slot.interface";

export default interface CurSetPiece {
  piece: ArmorPiece | Charm;
  slots?: CurSetPieceSlot[];
}
