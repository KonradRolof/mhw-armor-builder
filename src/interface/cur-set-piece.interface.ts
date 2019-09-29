import ArmorPiece from "./armor-piece.interface";
import Charm from "./charm.interface";
import CurSetPieceSlot from "./cur-set-piece-slot.interface";
import Weapon from "./weapon.interface";

export default interface CurSetPiece {
  piece: ArmorPiece | Charm | Weapon;
  slots?: CurSetPieceSlot[];
}
