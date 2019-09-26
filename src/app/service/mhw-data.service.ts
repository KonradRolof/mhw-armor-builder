import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const headers: HttpHeaders = new HttpHeaders({
  "Accept": "application/json"
});

@Injectable({
  providedIn: 'root'
})
export class MhwDataService {

  constructor(private http: HttpClient) { }

  public getArmorSets(): Observable<any> {
    return this.http.get("/assets/data/armor-sets.json", { headers });
  }

  public getArmorPieces(): Observable<any> {
    return this.http.get("/assets/data/armor-pieces.json", { headers });
  }
}
