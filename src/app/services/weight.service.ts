import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {WeightData} from "./weight.data";

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  constructor(private http: HttpClient) { }


  getWeightData(): Observable<WeightData[]> {

    const email = 'ranpad19@htl-kaindorf.at';

    const headers = new HttpHeaders().set('user-mail', email);

    return this.http.get<WeightData[]>('http://localhost:8080/api/weight', { headers: headers })
  }
}
