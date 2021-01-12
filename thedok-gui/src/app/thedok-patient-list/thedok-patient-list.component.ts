import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'thedok-patient-list',
  templateUrl: './thedok-patient-list.component.html',
  styleUrls: ['./thedok-patient-list.component.css']
})
export class ThedokPatientListComponent implements OnInit {
  public patients: MenuItem[] = [];

  constructor() { }
  ngOnInit(): void {
    this.patients = [
      {
        label: 'Erika',
        icon: PrimeIcons.USER
      },
      {
        label: 'Gerd',
        icon: PrimeIcons.USER
      }
    ];
  }

}
