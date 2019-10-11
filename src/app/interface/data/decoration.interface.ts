import SkillRank from "./skill-rank.interface";

export default interface Decoration {
  id: number; // The ID of the decoration
  slug?: string; // A humand readable unique identifier
  name: string; // The name of the decoration
  rarity: number; // The rarity of the decoration
  slot: number; // The slot that the decoration fits into
  skills: SkillRank[]; // An array of skill ranks that the decoration provides
}
