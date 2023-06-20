import {Component, OnInit} from '@angular/core';
import { CalorieService } from '../services/calorie.service';
import {CalorieChartComponent} from "../calorie-chart/calorie-chart.component";

@Component({
  selector: 'app-caloric-intake',
  templateUrl: './caloric-intake.component.html',
  styleUrls: ['./caloric-intake.component.css']
})
export class CaloricIntakeComponent{

  constructor(
    private calorieService: CalorieService,
    private calorieChart: CalorieChartComponent
  ) {}

  selectedDate: string | undefined;
  calorieInputValue: string | undefined;


  confirm(): void {

    // @ts-ignore
    const currentDate = new Date(this.selectedDate);

    const calorieValue = Number(this.calorieInputValue);

    console.log(currentDate);

    this.calorieService.postCalorieData(currentDate, calorieValue).subscribe(response => {
      console.log(response);
    });

    setTimeout(() => {
      this.calorieChart.getCalorieData();
    }, 1000);
  }

  handleDateSelected(date: string): string{
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    return this.selectedDate;
  }
}
