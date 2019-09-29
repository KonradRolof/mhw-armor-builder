import Slot from "./slot.interface";
import Attack from "./attack.interface";
import WeaponElement from "./weapon-element.interface";
import WeaponAssets from "./weapon-assets.interface";
import WeaponCraftingInfo from "./weapon-crafting-info.interface";
import WeaponSharpnessD from "./weapon-sharpness-d.interface";
import WeaponSharpness from "./weapon-sharpness.interface";

export default interface Weapon {
  id: number; // The ID of the weapon
  slug?: string; // A human readable unique identifier
  name: string; // The name of the weapon
  type: "great-sword" | "dual-blades" | "lance" | "charge-blade" | "heavy-bowgun" | "long-sword" | "hammer" |
    "gunlance" | "insect-glaive" | "bow" | "sword-and-shield" | "hunting-horn" | "switch-axe" | "light-bowgun"; // The weapon's type
  rarity: number; // The rarity of the weapon
  attack: Attack; // Contains information about the attack values of the weapon
  slots?: Slot[]; // An array containing slot information for the weapon
  elements?: WeaponElement[]; // An array containing element damage info for the weapon
  crafting?: WeaponCraftingInfo; // Contains crafting information for the weapon
  assets?: WeaponAssets; // Contains information about weapon UI assets (such as preview images)
  sharpness?: WeaponSharpnessD; // (deprecated) Contains sharpness information
  durability?: WeaponSharpness[]; // An array of sharpness information, ordered by handicraft level;
  // base sharpness can always be found at index 0
  attributes?: object; // See WeaponAttributes for more information
}
