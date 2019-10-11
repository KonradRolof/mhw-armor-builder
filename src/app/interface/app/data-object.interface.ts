import ArmorSetsObject from "./armor-sets-object.interface";
import ArmorPiecesObject from "./armor-pieces-object.interface";
import Skill from "../data/skill.interface";
import Decoration from "../data/decoration.interface";
import Charm from "../data/charm.interface";
import Weapon from "../data/weapon.interface";

export default interface DataObject {
  armors: ArmorSetsObject;
  pieces: ArmorPiecesObject;
  skills: Skill[];
  decorations: Decoration[];
  charms: Charm[];
  weapons: Weapon[];
}
