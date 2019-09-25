import ArmorPart from "./armor-part.interface";
import Jewel from "./jewel.interface";

export default interface CurSet {
  head?: ArmorPart;
  headSlots?: Jewel[];
  body?: ArmorPart;
  bodySlots?: Jewel[];
  arms?: ArmorPart;
  armsSlots?: Jewel[];
  hip?: ArmorPart;
  hipSlots?: Jewel[];
  legs?: ArmorPart;
  legsSlots?: Jewel[];
}
