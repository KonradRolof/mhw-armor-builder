import Defense from "./defense.interface";
import Resistances from "./resistances.interface";
import SetInfo from "./set-info.interface";
import ArmorAssets from "./armor-assets.interface";
import ArmorCraftingInfo from "./armor-crafting-info.interface";
import Slot from "./slot.interface";
import SkillRank from "./skill-rank.interface";

export default interface ArmorPiece {
  id: number; // The ID of the armor piece
  slug?: string; // A human readable unique identifier
  name: string; // The name of the armor piece
  type: "head" | "chest" | "gloves" | "waist" | "legs"; // ArmorType: The slot the armor piece fits in
  rank: "low" | "high" | "master"; // Rank: The rank of the armor piece
  rarity: number; // The rarity of the armor piece
  defense: Defense; // Contains information about the defense values of the armor piece
  resistances: Resistances; // Contains information about elemental resistances
  slots?: Slot[]; // Array<Slot>: An array decoration slot information, containing between 0 and 3 items
  skills?: SkillRank[]; // Array<SkillRank>: An array of skill ranks granted by the armor
  armorSet?: SetInfo; // Contains information about the set that the armor piece belongs to
  assets?: ArmorAssets; // ArmorAssets: Contains information about armor UI assets (such as preview images)
  crafting?: ArmorCraftingInfo; // ArmorCraftingInfo: Contains crafting information for the armor piece
  attributes?: any; // ArmorAttributes: See ArmorAttributes for more information
}
