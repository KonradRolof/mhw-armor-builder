import Armor from "../../interface/armor.interface";
import boneHeadAlpha from "./parts/bone-head-alpha.mr";
import boneMailAlpha from "./parts/bone-mail-aplha.mr";

const boneAlphaMr: Armor = {
  name: "Bone Armor",
  subName: "α+",
  rang: 2,
  rarity: 9,
  head: boneHeadAlpha,
  body: boneMailAlpha,
  hands: null,
  hip: null,
  legs: null
};

export default boneAlphaMr;
