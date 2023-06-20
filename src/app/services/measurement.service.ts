import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CalorieData} from "./calorie.data";

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  constructor(private http: HttpClient) { }


  getMeasurmentData(selectedValue: string): Observable<CalorieData[]> {

    const email = 'ranpad19@htl-kaindorf.at';

    console.log("selected Value: " + selectedValue)

    const headers = new HttpHeaders()
      .set('user-mail', email)
      .set('column', selectedValue);

    console.log("headers: " + headers.get('user-mail') + ", " + headers.get('column'))

    return this.http.get<CalorieData[]>('http://localhost:8080/api/measurements', { headers: headers })
  }


  postCalorieData(currentDate: Date | undefined, calories: number){
    let userid: number = 1;

    console.log("weight.service" + currentDate)

    const calorieObject = {
      userId: userid,
      validFrom: currentDate,
      calories: calories
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.http.post('http://localhost:8080/api/post/calories', calorieObject, options);
  }
}
