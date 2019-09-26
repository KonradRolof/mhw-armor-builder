import ArmorSetsObject from "./armor-sets-object.interface";
import ArmorPiecesObject from "./armor-pieces-object.interface";

export default interface DataObject {
  armors: ArmorSetsObject;
  pieces: ArmorPiecesObject;
}
