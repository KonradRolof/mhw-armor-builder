import ArmorPart from "../../../interface/armor-part.interface";

const boneGreavesAlpha: ArmorPart = {
  id: 3,
  armorId: 1,
  name: "Bone Greaves α+",
  type: "legs",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    {
      name: "Slugger",
      level: 1
    },
    {
      name: "Attack Boost",
      level: 1
    }
  ],
  slots: [2],
  elemental: {
    fire: 2,
    water: 0,
    thunder: 2,
    ice: 0,
    dragon: 2
  }
};

export default boneGreavesAlpha;
