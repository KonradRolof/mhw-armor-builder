export default interface SetInfo {
  id: number; // The ID of the armor set
  name: string; // The name of the armor set
  rank: "low" | "high" | "master"; // The rank of the armor set
  pieces: number[]; // An array of IDs of all armor pieces in the set
}
