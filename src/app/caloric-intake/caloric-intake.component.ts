import {Component, OnInit} from '@angular/core';
import { CalorieService } from '../services/calorie.service';

@Component({
  selector: 'app-caloric-intake',
  templateUrl: './caloric-intake.component.html',
  styleUrls: ['./caloric-intake.component.css']
})
export class CaloricIntakeComponent{

  constructor(
    private calorieService: CalorieService
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

    /*setTimeout(() => {
      this.weightChartService.renderChart();
    }, 1000);*/
  }

  handleDateSelected(date: string): string{
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    return this.selectedDate;
  }
}
