import ArmorSet from "../data/armor-set.interface";

export default interface ArmorSetsObject {
  low?: ArmorSet[];
  high?: ArmorSet[];
  master?: ArmorSet[];
  ready: boolean;
}
