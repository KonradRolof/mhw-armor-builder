import CurSetPiece from "./cur-set-piece.interface";

// @TODO change parts to { part: Peace, slots: Array }
export default interface CurSet {
  head: CurSetPiece;
  chest?: CurSetPiece;
  gloves?: CurSetPiece;
  waist?: CurSetPiece;
  legs?: CurSetPiece;
}
