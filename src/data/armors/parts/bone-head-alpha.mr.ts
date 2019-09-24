import ArmorPart from "../../../interface/armor-part.interface";

const boneHeadAlpha: ArmorPart = {
  id: 1,
  name: "Bone Helm",
  subName: "α+",
  type: "helm",
  rang: 2,
  rarity: 9,
  defense: 114,
  skills: [
    {
      name: "Health Boost",
      level: 2
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

export default boneHeadAlpha;
