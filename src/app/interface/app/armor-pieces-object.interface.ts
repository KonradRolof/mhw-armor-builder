import ArmorPiece from "../data/armor-piece.interface";

export default interface ArmorPiecesObject {
  low?: ArmorPiece[];
  high?: ArmorPiece[];
  master?: ArmorPiece[];
  ready: boolean;
}
