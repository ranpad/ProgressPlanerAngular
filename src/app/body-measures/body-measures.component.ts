import {Component, OnInit} from '@angular/core';
import {MeasurementService} from "../services/measurement.service";

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

  constructor(
    private measurementService: MeasurementService,
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

    this.measurementService.getMeasurmentData(value).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }


}
