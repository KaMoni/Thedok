import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedokPatientListComponent } from './thedok-patient-list.component';

describe('ThedokPatientListComponent', () => {
  let component: ThedokPatientListComponent;
  let fixture: ComponentFixture<ThedokPatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThedokPatientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThedokPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
