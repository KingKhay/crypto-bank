import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getData(){
    const headers = new HttpHeaders()
      .set('X-CoinAPI-Key', '191B211F-4F52-4F29-A8AD-467EB598E8B0');
    return this.http.get<any>("https://rest.coinapi.io/v1/assets/icons/32", {headers}).pipe(
      map(response => response.slice(0, 20))
    );
  }
}
