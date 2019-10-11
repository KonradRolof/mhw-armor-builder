import SkillRank from "./skill-rank.interface";

export default interface ArmorSetBonusRank {
  pieces: number; // The minium number of armor pieces that must be equipped to trigger this level of the bonus
  skill: SkillRank; // The skill rank provided by this tier of the armor set bonus
}
