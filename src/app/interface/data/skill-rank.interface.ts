import SkillRankModifiers from "./skill-rank-modifiers.interface";

export default interface SkillRank {
  id: number; // The ID of the skill rank
  slug?: string; // A human readable unique identifier
  level: number; // The numeric level of the skill rank (starting at 1)
  description?: string; // A text description of the skill rank
  skill: number; // The ID of the skill that the rank belongs to
  skillName: string; // The name of the skill that the rank belongs to
  modifiers?: SkillRankModifiers; // See SkillRank Modifiers for more information
}
