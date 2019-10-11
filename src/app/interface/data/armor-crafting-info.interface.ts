import CraftingCost from "./crafting-cost.interface";

export default interface ArmorCraftingInfo {
  materials?: CraftingCost[]; // An array of crafting material costs
}
