import WeaponSharpness from "../data/weapon-sharpness.interface";
import WeaponElement from "../data/weapon-element.interface";

export default interface Offence {
  health: number;
  attack: number;
  affinity: number;
  handicraftLevel: number;
  maxHandicraft: number;
  sharpness?: WeaponSharpness[];
  elements: WeaponElement[];
}
