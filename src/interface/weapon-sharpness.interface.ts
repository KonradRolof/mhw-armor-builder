// https://docs.mhw-db.com/?javascript#weapon-sharpness
export default interface WeaponSharpness {
  red: number; // The number of normal hits the weapon can make at red sharpness
  orange: number; // The number of normal hits the weapon can make at orange sharpness
  yellow?: number; // The number of normal hits the weapon can make at yellow sharpness
  green?: number; // The number of normal hits the weapon can make at green sharpness
  blue?: number; // The number of normal hits the weapon can make at blue sharpness
  white?: number; // The number of normal hits the weapon can make at white sharpness
}
