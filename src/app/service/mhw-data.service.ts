import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MhwDataService {
  private headers: HttpHeaders = new HttpHeaders({
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }
}
