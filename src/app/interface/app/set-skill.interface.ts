import ArmorSetBonusRank from "../data/armor-set-bonus-rank.interface";
import ArmorSetBonus from "../data/armor-set-bonus.interface";

export default interface SetSkill {
  setName: string;
  current: number;
  bonus: ArmorSetBonus;
  bonusRank: ArmorSetBonusRank;
  active: boolean;
}
