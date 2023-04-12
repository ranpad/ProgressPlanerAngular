import { Component} from '@angular/core';

import {RouterModule} from "@angular/router";
import {WeightTrackerComponent} from "./weight-tracker/weight-tracker.component";
import {BodyMeasuresComponent} from "./body-measures/body-measures.component";
import {CaloricIntakeComponent} from "./caloric-intake/caloric-intake.component";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProgressPlanerAngular';
}
