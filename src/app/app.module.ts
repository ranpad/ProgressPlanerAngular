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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { WeightChartComponent } from './weight-chart/weight-chart.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import {MatSelectModule} from '@angular/material/select';
import { CalorieChartComponent } from './calorie-chart/calorie-chart.component';
import {NgApexchartsModule} from "ng-apexcharts";
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { AlertModule } from '@coreui/angular';
import {ChartjsComponent} from "@coreui/angular-chartjs";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {WeightChartService} from "./services/weight-chart.service";

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
    ToggleSwitchComponent,
    CalorieChartComponent,
    LoginComponent,
    DashboardComponent
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
        MatSelectModule,
        NgApexchartsModule,
        AlertModule,
        ChartjsComponent,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
    ],
  exports: [DatePickerComponent,
            CalorieChartComponent],
  providers: [
    WeightChartService,
    DatePickerComponent,
    CalorieChartComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
