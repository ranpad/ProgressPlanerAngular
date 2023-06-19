import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  @Output() dateSelected = new EventEmitter<string>();
  currentDate: string | undefined;

  public currentDateObject: Date;

  constructor() {
    this.currentDateObject = new Date();
  }

  ngOnInit() {
    this.currentDateObject = new Date();
  }

  onDateChanged(): void {
    console.log(this.currentDate);
    this.dateSelected.emit(this.currentDate);
  }

}
