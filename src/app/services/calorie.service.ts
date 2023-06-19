import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CalorieData} from "./calorie.data";

@Injectable({
  providedIn: 'root'
})
export class CalorieService {
  constructor(private http: HttpClient) { }


  getCalorieData(): Observable<CalorieData[]> {

    const email = 'ranpad19@htl-kaindorf.at';

    const headers = new HttpHeaders().set('user-mail', email);

    return this.http.get<CalorieData[]>('http://localhost:8080/api/calories', { headers: headers })
  }


  postCalorieData(currentDate: Date | undefined, calories: number){
    let userid: number = 1;

    console.log("weight.service" + currentDate)

    const weightObject = {
      userId: userid,
      validFrom: currentDate,
      calories: calories
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.http.post('http://localhost:8080/api/post/calories', weightObject, options);
  }
}
