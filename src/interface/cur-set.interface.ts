import ArmorPart from "./armor-part.interface";

export default interface CurSet {
  head?: ArmorPart;
  headSlots?: any[];
  body?: ArmorPart;
  bodySlots?: any[];
  arms?: ArmorPart;
  armsSlots?: any[];
  hip?: ArmorPart;
  hipSlots?: any[];
  legs?: ArmorPart;
  legsSlots?: any[];
}
