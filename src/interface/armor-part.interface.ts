import SkillShort from "./skill-short.interface";
import ElementalStats from "./elemental-stats.interface";

export default interface ArmorPart {
  id: number;
  armorId: number;
  name: string;
  type: string;
  rang: number;
  rarity: number;
  defense: number;
  skills?: SkillShort[];
  slots?: number[];
  elemental: ElementalStats;
}
