import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedokPatientDetailsComponent } from './thedok-patient-details.component';

describe('ThedokPatientDetailsComponent', () => {
  let component: ThedokPatientDetailsComponent;
  let fixture: ComponentFixture<ThedokPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThedokPatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThedokPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
