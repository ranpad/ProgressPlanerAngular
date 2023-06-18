import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WeightChartService {
  private renderChartSubject = new Subject<void>();

  renderChart$ = this.renderChartSubject.asObservable();

  renderChart(): void {
    this.renderChartSubject.next();
  }
}
