import ArmorPart from "../../../interface/armor-part.interface";

const boneMailAlpha: ArmorPart = {
  id: 2,
  name: "Bone Mail",
  subName: "α+",
  type: "body",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    {
      name: "Attack Boost",
      level: 2
    },
    {
      name: "Health Boost",
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

export default boneMailAlpha;
