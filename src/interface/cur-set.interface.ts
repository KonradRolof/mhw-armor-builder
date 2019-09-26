import ArmorPiece from "./armor-piece.interface";

export default interface CurSet {
  head?: ArmorPiece;
  headSlots?: any[];
  chest?: ArmorPiece;
  chestSlots?: any[];
  gloves?: ArmorPiece;
  glovesSlots?: any[];
  waist?: ArmorPiece;
  waistSlots?: any[];
  legs?: ArmorPiece;
  legsSlots?: any[];
}
