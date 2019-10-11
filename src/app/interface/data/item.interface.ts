export default interface Item {
  id: number;
  name?: string;
  description?: string;
  rarity?: number;
  carryLimit?: number;
  sellPrice?: number;
  buyPrice?: number;
}
