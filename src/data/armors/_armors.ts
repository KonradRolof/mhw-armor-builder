import Armor from "../../interface/armor.interface";
import boneAlphaMr from "./bone-alpha.mr";

import ArmorPiece from "../../interface/armor-piece.interface";
import ap from "./parts/armor-pieces.json";

const armorPieces = [];

ap.map((item) => {
  return armorPieces.push(item as ArmorPiece);
});
console.log(armorPieces);

const armors: Armor[] = [
  boneAlphaMr
];

export default armors;
