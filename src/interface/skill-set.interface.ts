import Skill from "./skill.interface";

export default interface SkillSet {
  id: number;
  skill: Skill;
  max: number;
  level: number;
}
