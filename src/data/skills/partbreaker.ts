import Skill from "../../interface/skill.interface";

const partBreaker: Skill = {
  id: 1,
  name: "Partbreaker",
  description: "Partbreaker is increased in level based on the amount of Equipment with this skill the hunter is using",
  special: "Part damage",
  level: [
    {
      level: 1,
      attack: 0,
      defense: 0,
      affinity: 0,
      elemental: {
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      specialValue: "+10%"
    },
    {
      level: 2,
      attack: 0,
      defense: 0,
      affinity: 0,
      elemental: {
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      specialValue: "+20%"
    },
    {
      level: 3,
      attack: 0,
      defense: 0,
      affinity: 0,
      elemental: {
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      specialValue: "+30%"
    }
  ]
};

export default partBreaker;
