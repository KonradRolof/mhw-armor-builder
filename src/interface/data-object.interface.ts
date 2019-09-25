import Armor from "./armor.interface";
import Skill from "./skill.interface";
import Jewel from "./jewel.interface";

export default interface DataObject {
  armors: Armor[];
  skills: Skill[];
  decorations: Jewel[];
}
