import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MhwStorageService {

  constructor() { }

  public static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public static getItem(key: string): string|null {
    return localStorage.getItem(key);
  }

  public static getAndUse(key: string, callback: (item: string) => void) {
    const item = MhwStorageService.getItem(key);

    callback(item);
  }
}
