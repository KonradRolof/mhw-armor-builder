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

  public getArmorSets(url: string): Observable<any> {
    return this.http.get(url, { headers });
  }

  public getArmorPieces(url: string): Observable<any> {
    return this.http.get(url, { headers });
  }

  public getSkills(url: string): Observable<any> {
    return this.http.get(url, { headers });
  }
}
