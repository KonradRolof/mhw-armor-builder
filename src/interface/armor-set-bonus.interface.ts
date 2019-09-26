import ArmorSetBonusRank from "./armor-set-bonus-rank.interface";

export default interface ArmorSetBonus {
  id: number; // The ID of the bonus
  name: string; // The name of the bonus
  ranks: ArmorSetBonusRank[]; // An array of the different ranks of the bonus
}
