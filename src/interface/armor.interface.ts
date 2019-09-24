import ArmorPart from "./armor-part.interface";

export default interface Armor {
  name: string;
  subName: string;
  rang: number;
  rarity: number;
  head?: ArmorPart;
  body?: ArmorPart;
  hands?: ArmorPart;
  hip?: ArmorPart;
  legs?: ArmorPart;
}
