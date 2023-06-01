import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WeightService} from "../services/weight.service";


@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.component.html',
  styleUrls: ['./weight-tracker.component.css']
})
export class WeightTrackerComponent {
  private today: Date = new Date();
  date = new FormControl(this.today.toLocaleDateString());


  constructor(private http: HttpClient,
              private weightService: WeightService) {}

  ngOnInit(){
    this.getWeightData();
  }

  getWeightData(): void{
    this.weightService.getWeightData().subscribe(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
