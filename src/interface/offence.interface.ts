import WeaponSharpness from "./weapon-sharpness.interface";

export default interface Offence {
  health: number;
  attack: number;
  affinity: number;
  handicraftLevel: number;
  maxHandicraft: number;
  sharpness?: WeaponSharpness[];
  damageFire?: number;
  damageWater?: number;
  damageIce?: number;
  damageThunder?: number;
  damageDragon?: number;
  hiddenElement?: boolean;
}
