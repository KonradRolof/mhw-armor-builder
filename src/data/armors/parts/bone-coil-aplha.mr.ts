import ArmorPart from "../../../interface/armor-part.interface";

const boneCoilAlpha: ArmorPart = {
  id: 3,
  name: "Bone Coil",
  subName: "α+",
  type: "hip",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    {
      name: "Attack Boost",
      level: 1
    },
    {
      name: "Partbreaker",
      level: 1
    }
  ],
  slots: [3],
  elemental: {
    fire: 2,
    water: 0,
    thunder: 2,
    ice: 0,
    dragon: 2
  }
};

export default boneCoilAlpha;
