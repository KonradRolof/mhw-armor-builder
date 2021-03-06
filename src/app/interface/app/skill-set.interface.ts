import Skill from "../data/skill.interface";

export default interface SkillSet {
  id: number;
  skill: Skill;
  max: number;
  level: number;
  trueLevel: number;
  levelArray: number[];
}
