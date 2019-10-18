export default interface SkillRankModifiers {
  affinity?: number; // Modifies the affinity of a weapon
  attack?: number; // Modifies the attack value of a weapon
  damageFire?: number|string; // Modifies fire damage
  damageWater?: number|string; // Modifies water damage
  damageIce?: number|string; // Modifies ice damage
  damageThunder?: number|string; // Modifies thunder damage
  damageDragon?: number|string; // Modifies dragon damage
  defense?: number; // Modifies the character's defense
  health?: number; // Modifies the character's maximum health
  sharpnessBonus?: number; // Modifies the maximum sharpness of a weapon
  resistAll?: number; // Modifies all elemental resistances
  resistFire?: number; // Modifies fire resistance
  resistWater?: number; // Modifies water resistance
  resistIce?: number; // Modifies ice resistance
  resistThunder?: number; // Modifies thunder resistance
  resistDragon?: number; // Modifies dragon resistance,
  hiddenRanks?: number; // ID of the skill to activate hidden ranks
}
