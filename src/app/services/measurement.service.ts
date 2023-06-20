import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CalorieData} from "./calorie.data";
import {MeasurementData} from "./measurement.data";

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  constructor(private http: HttpClient) { }


  getMeasurmentData(selectedValue: string): Observable<MeasurementData[]> {

    const email = 'ranpad19@htl-kaindorf.at';

    console.log("selected Value: " + selectedValue)

    const headers = new HttpHeaders()
      .set('user-mail', email)
      .set('column', selectedValue);

    console.log("headers: " + headers.get('user-mail') + ", " + headers.get('column'))

    return this.http.get<MeasurementData[]>('http://localhost:8080/api/measurements', { headers: headers })
  }


  postMeasurementData(currentDate: string | undefined, arm: string | undefined, waist: string | undefined, chest: string | undefined, leg: string | undefined, shoulder: string | undefined, calf: string | undefined){
    let userid: number = 1;

    const measurementObject = {
      userId: userid,
      validFrom: currentDate,
      arm: arm,
      waist: waist,
      chest: chest,
      leg: leg,
      shoulder: shoulder,
      calf: calf
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.http.post('http://localhost:8080/api/post/measurements', measurementObject, options);
  }
}
