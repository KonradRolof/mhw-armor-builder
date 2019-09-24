import ArmorPart from "./armor-part.interface";

export default interface Armor {
  id: number;
  name: string;
  subName: string;
  rang: number;
  rarity: number;
  head?: ArmorPart;
  body?: ArmorPart;
  arms?: ArmorPart;
  hip?: ArmorPart;
  legs?: ArmorPart;
}
