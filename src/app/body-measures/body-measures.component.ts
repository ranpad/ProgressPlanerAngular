import {Component, OnInit} from '@angular/core';
import {MeasurementService} from "../services/measurement.service";
import {MeasurementChartComponent} from "../measurement-chart/measurement-chart.component";
import {MeasurementData} from "../services/measurement.data";

interface Measurements {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-body-measures',
  templateUrl: './body-measures.component.html',
  styleUrls: ['./body-measures.component.css']
})
export class BodyMeasuresComponent{

  public selectedValue: string = '';
  selectedDate: string | undefined;
  arm: string | undefined;
  waist: string | undefined;
  chest: string | undefined;
  leg: string | undefined;
  shoulder: string | undefined;
  calf: string | undefined;
  measurementData: MeasurementData | undefined;

  constructor(
    private measurementService: MeasurementService,
    private measurementChart: MeasurementChartComponent,
  ) {}

  measurements: Measurements[] = [
    {value: '0', viewValue: 'Arm'},
    {value: '1', viewValue: 'Chest'},
    {value: '2', viewValue: 'Shoulders'},
    {value: '3', viewValue: 'Waist'},
    {value: '4', viewValue: 'Leg'},
    {value: '5', viewValue: 'Calf'},
  ];

  renderChart(): void{
    let value = this.selectedValue;
    console.log(value);

    if (value === '0'){
      value = 'arm';
    }

    if (value === '1'){
      value = 'chest';
    }

    if (value === '2'){
      value = 'shoulder';
    }

    if (value === '3'){
      value = 'waist';
    }

    if (value === '4'){
      value = 'leg';
    }

    if (value === '5'){
      value = 'calf';
    }

    console.log(this.arm + " " + this.waist + " " + this.chest + " " + this.leg + " " + this.shoulder + " " + this.calf)
    this.measurementService.postMeasurementData(this.selectedDate, this.arm, this.waist, this.chest, this.leg, this.shoulder, this.calf).subscribe(
      (response) => {
        console.log(response)
      }
    )

    setTimeout(() => {
      this.measurementChart.getMeasurementData(value)
    }, 1000)

  }

  reloadChart(){
    let value = this.selectedValue;
    console.log(value);

    if (value === '0'){
      value = 'arm';
    }

    if (value === '1'){
      value = 'chest';
    }

    if (value === '2'){
      value = 'shoulder';
    }

    if (value === '3'){
      value = 'waist';
    }

    if (value === '4'){
      value = 'leg';
    }

    if (value === '5'){
      value = 'calf';
    }

    setTimeout(() => {
      this.measurementChart.getMeasurementData(value)
    }, 1000)
  }

  handleDateSelected(date: string): string{
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    return this.selectedDate;
  }


}
