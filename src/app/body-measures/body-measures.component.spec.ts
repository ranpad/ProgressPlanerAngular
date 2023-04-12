import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMeasuresComponent } from './body-measures.component';

describe('BodyMeasuresComponent', () => {
  let component: BodyMeasuresComponent;
  let fixture: ComponentFixture<BodyMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
