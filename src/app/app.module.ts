import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import { WeightTrackerComponent } from './weight-tracker/weight-tracker.component';
import { BodyMeasuresComponent } from './body-measures/body-measures.component';
import { CaloricIntakeComponent } from './caloric-intake/caloric-intake.component';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";
import {FlexLayoutModule} from "@angular/flex-layout";
import { DatePickerComponent } from './date-picker/date-picker.component';
import {FormsModule} from "@angular/forms";
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { WeightChartComponent } from './weight-chart/weight-chart.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import {MatSelectModule} from '@angular/material/select';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WeightTrackerComponent,
    BodyMeasuresComponent,
    CaloricIntakeComponent,
    DatePickerComponent,
    CanvasJSChart,
    WeightChartComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NgOptimizedImage,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatNativeDateModule,
    FormsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
