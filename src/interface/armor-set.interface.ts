import ArmorPiece from "./armor-piece.interface";

export default interface ArmorSet {
  id: number; // The ID of the armor set
  name: string; // The name of the armor set
  rank: "low" | "high" | "master"; // The rank of the armor set
  pieces: ArmorPiece[]; // An array of armor pieces that are part of the set
  bonus?: any; // Either an object describing armor set bonus information, or null
}
