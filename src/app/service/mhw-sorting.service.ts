import { Injectable } from "@angular/core";
import Decoration from "../interface/data/decoration.interface";
import SkillSet from "../interface/app/skill-set.interface";
import ArmorSet from "../interface/data/armor-set.interface";
import Weapon from "../interface/data/weapon.interface";
import ArmorPiece from "../interface/data/armor-piece.interface";

@Injectable({
  providedIn: "root"
})
export class MhwSortingService {

  constructor() { }

  public static sortDecorationsBySize(decorations: Decoration[]): Decoration[] {
    return decorations.sort((a, b) => {
      if (a.slot > b.slot) {
        return -1;
      }
      if (a.slot < b.slot) {
        return 1;
      }
      return 0;
    });
  }

  public static sortSkillsByLevel(skills: SkillSet[]): SkillSet[] {
    return skills.sort((a, b) => {
      if (a.level > b.level) {
        return -1;
      }
      if (a.level < b.level) {
        return 1;
      }
      return 0;
    });
  }

  public static sortArmorsByRarity(armorSets: ArmorSet[]): ArmorSet[] {
    return armorSets.sort((a, b) => {
      if (a.rarity > b.rarity) {
        return 1;
      }
      if (a.rarity < b.rarity) {
        return -1;
      }
      return 0;
    });
  }

  public static sortArmorPieceByRarity(pieces: ArmorPiece[]): ArmorPiece[] {
    return pieces.sort((a, b) => {
      if (a.rarity > b.rarity) {
        return 1;
      }
      if (a.rarity < b.rarity) {
        return -1;
      }
      return 0;
    });
  }

  public static sortWeaponsByRarity(weapons: Weapon[]): Weapon[] {
    return weapons.sort((a, b) => {
      if (a.rarity > b.rarity) {
        return 1;
      }
      if (a.rarity < b.rarity) {
        return -1;
      }
      return 0;
    });
  }
}
