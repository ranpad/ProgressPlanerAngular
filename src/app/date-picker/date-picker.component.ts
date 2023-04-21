import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  public currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.currentDate = new Date();
  }
}
