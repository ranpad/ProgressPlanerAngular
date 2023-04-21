import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";


@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.component.html',
  styleUrls: ['./weight-tracker.component.css']
})
export class WeightTrackerComponent {
  private today: Date = new Date();
  date = new FormControl(this.today.toLocaleDateString());
}
