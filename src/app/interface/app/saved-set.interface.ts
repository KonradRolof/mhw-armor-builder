import CurSet from "./cur-set.interface";

export default interface SavedSet {
  id: number;
  name: string;
  description?: string;
  set: CurSet;
}
