import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  constructor(private http: HttpClient) { }

  getWeightData(): Observable<any> {
    const email = 'ranpad19@htl-kaindorf.at';

    const headers = new HttpHeaders().set('user-mail', email);

    return this.http.get<any>('http://localhost:8080/api/weight', { headers: headers })
  }
}
