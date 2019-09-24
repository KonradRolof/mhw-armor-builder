import ArmorPart from "../../../interface/armor-part.interface";
import SkillShort from "../../../interface/skill-short.interface";

const skillAttackBoost: SkillShort = {
  name: "Attack Boost",
  level: 2
};

const skillHealthBoost: SkillShort = {
  name: "Health Boost",
  level: 1
};

const boneMailAlpha: ArmorPart = {
  name: "Bone Mail",
  subName: "α+",
  type: "body",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    skillAttackBoost,
    skillHealthBoost
  ],
  slots: [2]
};

export default boneMailAlpha;
