import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricIntakeComponent } from './caloric-intake.component';

describe('CaloricIntakeComponent', () => {
  let component: CaloricIntakeComponent;
  let fixture: ComponentFixture<CaloricIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloricIntakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloricIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
