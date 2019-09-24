import SkillLevel from "./skill-level.interface";

export default interface Skill {
  id: number;
  name: string;
  description: string;
  level: SkillLevel[];
  special?: string;
}
