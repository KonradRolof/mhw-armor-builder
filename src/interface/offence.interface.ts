import WeaponSharpness from "./weapon-sharpness.interface";
import WeaponElement from "./weapon-element.interface";

export default interface Offence {
  health: number;
  attack: number;
  affinity: number;
  handicraftLevel: number;
  maxHandicraft: number;
  sharpness?: WeaponSharpness[];
  elements?: WeaponElement[];
}
