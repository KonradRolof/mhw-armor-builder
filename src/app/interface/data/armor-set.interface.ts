import ArmorPiece from "./armor-piece.interface";
import ArmorSetBonus from "./armor-set-bonus.interface";

export default interface ArmorSet {
  id: number; // The ID of the armor set
  name: string; // The name of the armor set
  rank: "low" | "high" | "master"; // The rank of the armor set
  pieces: ArmorPiece[]; // An array of armor pieces that are part of the set
  bonus?: ArmorSetBonus; // Either an object describing armor set bonus information, or null
  rarity?: number; // comes from angular
}
