import ArmorSetsObject from "./armor-sets-object.interface";
import ArmorPiecesObject from "./armor-pieces-object.interface";
import Skill from "./skill.interface";

export default interface DataObject {
  armors: ArmorSetsObject;
  pieces: ArmorPiecesObject;
  skills: Skill[];
}
