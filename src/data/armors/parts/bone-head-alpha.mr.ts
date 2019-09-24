import ArmorPart from "../../../interface/armor-part.interface";
import SkillShort from "../../../interface/skill-short.interface";

const skillHealthBoost: SkillShort = {
  name: "Health Boost",
  level: 2
};

const skillPartBreaker: SkillShort = {
  name: "Partbreaker",
  level: 1
};

const boneHeadAlpha: ArmorPart = {
  name: "Bone Helm",
  subName: "α+",
  type: "helm",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    skillHealthBoost,
    skillPartBreaker
  ],
  slots: [3]
};

export default boneHeadAlpha;
