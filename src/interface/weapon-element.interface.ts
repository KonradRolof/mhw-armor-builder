export default interface WeaponElement {
  type: "fire" | "water" | "ice" | "thunder" | "dragon" | "blast" | "poison" | "sleep" | "paralysis" | "stun"; // The element's damage type
  damage: number; // The power of the element
  hidden?: boolean; // Indicates whether or not the element is a hidden element
}
