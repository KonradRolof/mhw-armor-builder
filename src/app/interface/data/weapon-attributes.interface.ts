// TODO and more specialized interfaces from https://docs.mhw-db.com/?javascript#ammo-capacities
export default interface WeaponAttributes {
  ammoCapacities?: any; // For "light-bowgun" and "heavy-bowgun" weapons only
  affinity: number; // The affinity of the weapon
  boostType?: "sever" | "speed" | "element" | "health" | "stamina" | "blunt"; // For "insect-glaive" weapons only
  coatings?: string[]; // For "bow" weapons only
  damageType?: "blunt" | "piercing" | "slashing"; // The type of damage the weapon deals
  defense?: number; // Some weapons (namely "gunlance" types) augment player defense; such weapons indicate that with this field
  deviation?: "none" | "low" | "average" | "high"; // For "light-bowgun" and "heavy-bowgun" weapons only
  elderseal?: "low" | "average" | "high"; // The elderseal type attributed to the weapon
  phialType?: any; // For "switch-axe" and "charge-blade" weapons only
  shellingType?: string; // For "gunlance" weapons only
  specialAmmo?: "wyvernblast" | "wyvernheart" | "wyvernsnipe"; // For "light-bowgun" and "heavy-bowgun" weapons only
}
