import SkillShort from "./skill-short.interface";

export default interface Jewel {
  id: number;
  name: string;
  slotSize: number;
  rarity: number;
  skills: SkillShort[];
}
