import SkillShort from "./skill-short.interface";

export default interface ArmorPart {
  name: string;
  subName: string;
  type: string;
  rang: number;
  rarity: number;
  defense: number;
  skills?: SkillShort[];
  slots?: number[];
}
