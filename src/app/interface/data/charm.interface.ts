import CharmRank from "./charm-rank.interface";

export default interface Charm {
  id: number; // The ID of the charm
  slug?: string; // A human readable unique identifier
  name: string; // The name of the charm
  ranks: CharmRank[]; // An array of the different ranks of the charm
  type?: "charm";
}
