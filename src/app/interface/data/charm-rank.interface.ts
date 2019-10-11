import SkillRank from "./skill-rank.interface";
import CharmRankCrafting from "./charm-rank-crafting.interface";

export default interface CharmRank {
  name: string; // The name of the charm rank (includes level)
  level: number; // The level of the charm rank
  rarity: number; // The rarity of the charm rank
  skills: SkillRank[]; // An array of skill ranks provided by the charm
  crafting?: CharmRankCrafting; // An object describing crafting info for the charm
}
