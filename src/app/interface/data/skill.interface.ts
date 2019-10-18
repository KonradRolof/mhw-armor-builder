import SkillRank from "./skill-rank.interface";

export default interface Skill {
  id: number; // The skill's ID
  slug?: string; // A human readable unique identifier
  name: string; // The name of the skill
  description?: string; // A short description of the skill
  ranks: SkillRank[]; // An array of available ranks for the skill
  hiddenRanks?: SkillRank[]; // An array of available ranks to reach with an other skill
}
