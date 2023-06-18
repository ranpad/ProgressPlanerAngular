import { Observable } from 'rxjs';
import { WeightData } from '../services/weight.data';
import { CanvasJS } from '../../assets/canvasjs.angular.component';
import { Chart } from 'chart.js';
import { WeightChartService } from '../services/weight-chart.service';
import {WeightService} from "../services/weight.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-weight-chart',
  templateUrl: './weight-chart.component.html',
  styleUrls: ['./weight-chart.component.css'],
})
export class WeightChartComponent implements OnInit {
  chart: Chart | undefined;
  weightData: WeightData[] | undefined;

  constructor(
    private weightService: WeightService,
    private weightChartService: WeightChartService
  ) {}

  ngOnInit() {
    this.getWeightData();
    this.weightChartService.renderChart$.subscribe(() => {
      this.getWeightData();
    });
  }

  renderChart(): void {
    // Render the chart using the existing data
    this.renderChartWithUpdatedData();
  }

  getWeightData(): void {
    this.chartOptions.data[0].dataPoints = [];
    this.weightService.getWeightData().subscribe(
      (data) => {
        this.weightData = data;
        console.log('data', data);
        console.log('weightData', this.weightData);
        for (let i = 0; i < this.weightData.length; i++) {
          this.chartOptions.data[0].dataPoints.push({
            x: new Date(
              this.weightData[i].validFrom[0],
              this.weightData[i].validFrom[1] - 1,
              this.weightData[i].validFrom[2]
            ),
            y: this.weightData[i].weight,
          });
        }
        this.renderChartWithUpdatedData(); // Render the chart after updating the data
      },
      (error) => {
        console.error(error);
      }
    );
  }

  renderChartWithUpdatedData(): void {
    this.chart = new CanvasJS.Chart('chartContainer', this.chartOptions);
    this.chart?.render();
  }

  chartOptions = {
    animationEnabled: true,
    theme: "light2",
    zoomEnabled: true,
    title: {
      text: "Weight-Chart"
    },
    axisX: {
      valueFormatString: "MMM YYYY",
      tickInterval: "1 month",
    },
    axisY: {
      title: "Weight (kg)"
    },
    data: [{
      type: "spline",
      xValueFormatString: " DD.MM.YYYY",
      yValueFormatString: "###.## kg",
      dataPoints: [] as {x: Date, y: number}[]
    }]
  }
}
