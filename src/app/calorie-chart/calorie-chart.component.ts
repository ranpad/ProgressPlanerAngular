import { Component } from '@angular/core';
import {Chart} from "chart.js";
import {WeightData} from "../services/weight.data";
import {WeightService} from "../services/weight.service";
import {WeightChartService} from "../services/weight-chart.service";
import {CanvasJS} from "../../assets/canvasjs.angular.component";
import {CalorieData} from "../services/calorie.data";
import {CalorieService} from "../services/calorie.service";

@Component({
  selector: 'app-calorie-chart',
  templateUrl: './calorie-chart.component.html',
  styleUrls: ['./calorie-chart.component.css']
})
export class CalorieChartComponent{

  chart: Chart | undefined;
  calorieData: CalorieData[] | undefined;

  constructor(
    private calorieService: CalorieService,
    private weightChartService: WeightChartService
  ) {}

  ngOnInit() {
    this.getCalorieData();
    /*this.weightChartService.renderChart$.subscribe(() => {
      this.getCalorieData();
    });*/
  }

  renderChart(): void {
    // Render the chart using the existing data
    this.renderChartWithUpdatedData();
  }

  getCalorieData(): void {
    this.chartOptions.data[0].dataPoints = [];
    this.calorieService.getCalorieData().subscribe(
      (data) => {
        this.calorieData = data;
        console.log('data', data);
        console.log('weightData', this.calorieData);
        for (let i = 0; i < this.calorieData.length; i++) {
          this.chartOptions.data[0].dataPoints.push({
            x: new Date(
              this.calorieData[i].validFrom[0],
              this.calorieData[i].validFrom[1] - 1,
              this.calorieData[i].validFrom[2]
            ),
            y: this.calorieData[i].calories,
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
    this.chart = new CanvasJS.Chart('calorieChartContainer', this.chartOptions);
    this.chart?.render();
  }

  chartOptions = {
    animationEnabled: true,
    theme: "light2",
    zoomEnabled: true,
    title: {
      text: "Calorie-Chart"
    },
    axisX: {
      valueFormatString: "DD.MM.YYYY",
      tickInterval: "1 month",
    },
    axisY: {
      title: "Calories"
    },
    data: [{
      type: "spline",
      xValueFormatString: " DD.MM.YYYY",
      yValueFormatString: "#### cal",
      dataPoints: [] as {x: Date, y: number}[]
    }]
  }
}
