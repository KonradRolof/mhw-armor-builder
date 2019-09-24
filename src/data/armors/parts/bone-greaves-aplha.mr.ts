import ArmorPart from "../../../interface/armor-part.interface";
import SkillShort from "../../../interface/skill-short.interface";

const skillSlugger: SkillShort = {
  name: "Slugger",
  level: 1
};

const skillHornMaestro: SkillShort = {
  name: "Attack Boost",
  level: 1
};

const boneGreavesAlpha: ArmorPart = {
  id: 3,
  name: "Bone Greaves",
  subName: "α+",
  type: "legs",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    skillSlugger,
    skillHornMaestro
  ],
  slots: [2],
  elemental: {
    fire: 2,
    water: 0,
    thunder: 2,
    ice: 0,
    dragon: 2
  }
};

export default boneGreavesAlpha;
