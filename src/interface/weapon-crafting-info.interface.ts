import CraftingCost from "./crafting-cost.interface";

export default interface WeaponCraftingInfo {
  craftable?: boolean; // Indicates whether or not the weapon may be directly crafted
  previous?: number; // The ID of the weapon that this weapon is upgraded from, or null if nothing upgrades into this weapon
  branches?: number[]; // An array of IDs that the weapon may be upgraded into
  craftingMaterials: CraftingCost[]; // An array containing the material cost to create the weapon;
  // will always be empty if craftable is false
  upgradeMaterials: CraftingCost[]; // An array containing the material cost to upgrade the weapon identified by
  // previous into this weapon; will always be empty if previous is null
}
