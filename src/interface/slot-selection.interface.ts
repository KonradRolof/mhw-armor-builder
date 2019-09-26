export default interface SlotSelection {
  part: "head" | "chest" | "gloves" | "waist" | "legs" | "weapon" | "charm"; // Part of the set
  index: number; // Index of the slot,
  rank: number; // Rank of the slot,
}
