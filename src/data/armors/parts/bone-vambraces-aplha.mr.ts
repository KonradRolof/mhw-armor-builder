import ArmorPart from "../../../interface/armor-part.interface";
import SkillShort from "../../../interface/skill-short.interface";

const skillSlugger: SkillShort = {
  name: "Slugger",
  level: 2
};

const skillAttackBoost: SkillShort = {
  name: "Attack Boost",
  level: 1
};

const boneVambracesAlpha: ArmorPart = {
  id: 3,
  name: "Bone Vambraces",
  subName: "α+",
  type: "arms",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    skillSlugger,
    skillAttackBoost
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

export default boneVambracesAlpha;
