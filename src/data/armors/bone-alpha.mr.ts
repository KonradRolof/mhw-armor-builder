import Armor from "../../interface/armor.interface";
import boneHeadAlpha from "./parts/bone-head-alpha.mr";
import boneMailAlpha from "./parts/bone-mail-aplha.mr";
import boneVambracesAlpha from "./parts/bone-vambraces-aplha.mr";
import boneCoilAlpha from "./parts/bone-coil-aplha.mr";
import boneGreavesAlpha from "./parts/bone-greaves-aplha.mr";

const boneAlphaMr: Armor = {
  id: 1,
  name: "Bone Armor",
  subName: "α+",
  rang: 2,
  rarity: 9,
  head: boneHeadAlpha,
  body: boneMailAlpha,
  arms: boneVambracesAlpha,
  hip: boneCoilAlpha,
  legs: boneGreavesAlpha
};

export default boneAlphaMr;
