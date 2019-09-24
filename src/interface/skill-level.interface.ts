import ElementalStats from "./elemental-stats.interface";

export default interface SkillLevel {
  level: number;
  attack: number;
  defense: number;
  affinity: number;
  elemental: ElementalStats;
  specialValue?: string;
}
