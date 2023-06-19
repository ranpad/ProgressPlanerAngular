import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WeightService } from '../services/weight.service';
import { Observable } from 'rxjs';
import { WeightData } from '../services/weight.data';
import { WeightChartService } from '../services/weight-chart.service';
import { NgForm } from '@angular/forms';
import {DatePickerComponent} from "../date-picker/date-picker.component";


@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.component.html',
  styleUrls: ['./weight-tracker.component.css'],
})
export class WeightTrackerComponent implements OnInit {
  private today: Date = new Date();
  date = new FormControl(this.today.toLocaleDateString());
  weightFormControl = new FormControl();
  weightInputValue: string | undefined;
  dateInputValue: Date | undefined;
  selectedDate: string | undefined;

  constructor(
    private http: HttpClient,
    private weightService: WeightService,
    private weightChartService: WeightChartService,
    private datePicker: DatePickerComponent
  ) {}

  ngOnInit() {
    this.weightChartService.renderChart();
  }

  confirm(): void {

    // @ts-ignore
    const currentDate = new Date(this.selectedDate);

    const weightValue = Number(this.weightInputValue);

    console.log(currentDate);

    this.weightService.postWeightData(currentDate, weightValue).subscribe(response => {
      console.log(response);
    });

    setTimeout(() => {
      this.weightChartService.renderChart();
    }, 1000);
  }

  handleDateSelected(date: string): string{
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    return this.selectedDate;
  }
}
