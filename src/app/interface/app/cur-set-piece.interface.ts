import CurSetPieceSlot from "./cur-set-piece-slot.interface";
import ArmorPiece from "../data/armor-piece.interface";
import Charm from "../data/charm.interface";
import Weapon from "../data/weapon.interface";

export default interface CurSetPiece {
  piece: ArmorPiece | Charm | Weapon;
  slots?: CurSetPieceSlot[];
}
