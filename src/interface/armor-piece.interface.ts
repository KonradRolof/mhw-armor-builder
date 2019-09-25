export default interface ArmorPiece {
  id: number; // The ID of the armor piece
  slug: string; // A human readable unique identifier
  name: string; // The name of the armor piece
  type: "head" | "chest" | "gloves" | "waist" | "legs"; // ArmorType: The slot the armor piece fits in
  rank: "low" | "high" | "master"; // Rank: The rank of the armor piece
  rarity: number; // The rarity of the armor piece
  defense: object; // Defense: Contains information about the defense values of the armor piece
  resistances: object; // Resistances: Contains information about elemental resistances
  slots: object[]; // Array<Slot>: An array decoration slot information, containing between 0 and 3 items
  skills: object[]; // Array<SkillRank>: An array of skill ranks granted by the armor
  armorSet: object; // SetInfo: Contains information about the set that the armor piece belongs to
  assets: object; // ArmorAssets: Contains information about armor UI assets (such as preview images)
  crafting: object; // ArmorCraftingInfo: Contains crafting information for the armor piece
  attributes: object; // ArmorAttributes: See ArmorAttributes for more information
}
