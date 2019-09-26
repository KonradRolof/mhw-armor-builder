import Item from "./item.interface";

export default interface CraftingCost {
  quantity?: number; // The quantity of the item needed for the craft
  item?: Item; // Item: The item to be consumed during crafting
}
