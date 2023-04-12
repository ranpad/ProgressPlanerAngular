import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import {CaloricIntakeComponent} from "./caloric-intake/caloric-intake.component";
import {BodyMeasuresComponent} from "./body-measures/body-measures.component";
import {WeightTrackerComponent} from "./weight-tracker/weight-tracker.component";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'weight-tracker', component: WeightTrackerComponent},
      {path: 'body-measures', component: BodyMeasuresComponent},
      {path: 'caloric-intake', component: CaloricIntakeComponent},
  ]),
]
})
export class AppRoutingModule { }
