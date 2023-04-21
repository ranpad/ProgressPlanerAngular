import { Component } from '@angular/core';

interface Measurements {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-body-measures',
  templateUrl: './body-measures.component.html',
  styleUrls: ['./body-measures.component.css']
})
export class BodyMeasuresComponent {
  selectedValue: string | undefined;

  measurements: Measurements[] = [
    {value: '0', viewValue: 'Arms'},
    {value: '1', viewValue: 'Chest'},
    {value: '2', viewValue: 'Shoulders'},
    {value: '3', viewValue: 'Waist'},
    {value: '4', viewValue: 'Legs'},
    {value: '5', viewValue: 'Calves'},
  ];
}
