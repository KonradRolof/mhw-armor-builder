import ArmorPart from "../../../interface/armor-part.interface";
import SkillShort from "../../../interface/skill-short.interface";

const skillHornMaestro: SkillShort = {
  name: "Attack Boost",
  level: 1
};

const skillPartBreaker: SkillShort = {
  name: "Partbreaker",
  level: 1
};

const boneCoilAlpha: ArmorPart = {
  id: 3,
  name: "Bone Coil",
  subName: "α+",
  type: "hip",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    skillHornMaestro,
    skillPartBreaker
  ],
  slots: [3],
  elemental: {
    fire: 2,
    water: 0,
    thunder: 2,
    ice: 0,
    dragon: 2
  }
};

export default boneCoilAlpha;
