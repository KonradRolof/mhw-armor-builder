export default interface ArmorPart {
  id: number;
  armorId: number;
  name: string;
  type: string;
  rang: number;
  rarity: number;
  defense: number;
  skills?: any;
  slots?: number[];
  elemental: any;
}
