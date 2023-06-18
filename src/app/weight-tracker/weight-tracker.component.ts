import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WeightService } from '../services/weight.service';
import { Observable } from 'rxjs';
import { WeightData } from '../services/weight.data';
import { WeightChartService } from '../services/weight-chart.service';

@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.component.html',
  styleUrls: ['./weight-tracker.component.css'],
})
export class WeightTrackerComponent implements OnInit {
  private today: Date = new Date();
  date = new FormControl(this.today.toLocaleDateString());

  constructor(
    private http: HttpClient,
    private weightService: WeightService,
    private weightChartService: WeightChartService
  ) {}

  ngOnInit() {
    this.weightChartService.renderChart();
  }

  confirm(): void {
    this.weightChartService.renderChart();
  }
}
