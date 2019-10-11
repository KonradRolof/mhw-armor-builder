import CraftingCost from "./crafting-cost.interface";

export default interface CharmRankCrafting {
  craftable?: boolean; // Indicates whether or not the charm rank is directly craftable
  materials?: CraftingCost[]; // An array of crafting material costs
}
