import {AfterViewInit, Component} from '@angular/core';
import {Chart} from "chart.js";
import {CalorieData} from "../services/calorie.data";
import {CalorieService} from "../services/calorie.service";
import {WeightChartService} from "../services/weight-chart.service";
import {CanvasJS} from "../../assets/canvasjs.angular.component";
import {MeasurementService} from "../services/measurement.service";
import {MeasurementData} from "../services/measurement.data";

@Component({
  selector: 'app-measurement-chart',
  templateUrl: './measurement-chart.component.html',
  styleUrls: ['./measurement-chart.component.css']
})
export class MeasurementChartComponent{
  chart: Chart | undefined;
  measurementData: MeasurementData[] | undefined;

  constructor(
    private measurementService: MeasurementService,
    //private measurementData: MeasurementData
  ) {}

  renderChart(): void {
    // Render the chart using the existing data
    this.renderChartWithUpdatedData();
  }

  getMeasurementData(value: string): void {
    this.chartOptions.data[0].dataPoints = [];
    this.measurementService.getMeasurmentData(value).subscribe(
      (data) => {
        this.measurementData = data;
        console.log('data', data);
        console.log('weightData', this.measurementData);

        if (value === 'arm'){
          for (let i = 0; i < this.measurementData.length; i++) {
            this.chartOptions.data[0].dataPoints.push({
              x: new Date(
                this.measurementData[i].validFrom[0],
                this.measurementData[i].validFrom[1] - 1,
                this.measurementData[i].validFrom[2]
              ),
              y: this.measurementData[i].arm,
            });
          }
        }

        if (value === 'chest'){
          for (let i = 0; i < this.measurementData.length; i++) {
            this.chartOptions.data[0].dataPoints.push({
              x: new Date(
                this.measurementData[i].validFrom[0],
                this.measurementData[i].validFrom[1] - 1,
                this.measurementData[i].validFrom[2]
              ),
              y: this.measurementData[i].chest,
            });
          }
        }

        if (value === 'shoulder'){
          for (let i = 0; i < this.measurementData.length; i++) {
            this.chartOptions.data[0].dataPoints.push({
              x: new Date(
                this.measurementData[i].validFrom[0],
                this.measurementData[i].validFrom[1] - 1,
                this.measurementData[i].validFrom[2]
              ),
              y: this.measurementData[i].shoulder,
            });
          }
        }

        if (value === 'waist'){
          for (let i = 0; i < this.measurementData.length; i++) {
            this.chartOptions.data[0].dataPoints.push({
              x: new Date(
                this.measurementData[i].validFrom[0],
                this.measurementData[i].validFrom[1] - 1,
                this.measurementData[i].validFrom[2]
              ),
              y: this.measurementData[i].waist,
            });
          }
        }

        if (value === 'leg'){
          for (let i = 0; i < this.measurementData.length; i++) {
            this.chartOptions.data[0].dataPoints.push({
              x: new Date(
                this.measurementData[i].validFrom[0],
                this.measurementData[i].validFrom[1] - 1,
                this.measurementData[i].validFrom[2]
              ),
              y: this.measurementData[i].leg,
            });
          }
        }

        if (value === 'calf'){
          for (let i = 0; i < this.measurementData.length; i++) {
            this.chartOptions.data[0].dataPoints.push({
              x: new Date(
                this.measurementData[i].validFrom[0],
                this.measurementData[i].validFrom[1] - 1,
                this.measurementData[i].validFrom[2]
              ),
              y: this.measurementData[i].calf,
            });
          }
        }

        this.renderChartWithUpdatedData(); // Render the chart after updating the data
      },
      (error) => {
        console.error(error);
      }
    );
  }

  renderChartWithUpdatedData(): void {
    this.chart = new CanvasJS.Chart('chartContainer', this.chartOptions)
    this.chart?.render();
  }

  chartOptions = {
    animationEnabled: true,
    theme: "light2",
    zoomEnabled: true,
    title: {
      text: "Measurement-Chart"
    },
    axisX: {
      valueFormatString: "DD.MM.YYYY",
      tickInterval: "1 month",
    },
    axisY: {
      title: "Measurements"
    },
    data: [{
      type: "spline",
      xValueFormatString: " DD.MM.YYYY",
      yValueFormatString: "### cm",
      dataPoints: [] as {x: Date, y: number}[]
    }]
  }


}
