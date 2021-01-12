import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'thedok-patient-details',
  templateUrl: './thedok-patient-details.component.html',
  styleUrls: ['./thedok-patient-details.component.css']
})
export class ThedokPatientDetailsComponent implements OnInit {
  items: MenuItem[]= [];
  constructor() { }
  ngOnInit(): void {
    this.items = [
      {label: 'Stammdaten', icon: PrimeIcons.ID_CARD},
      {label: 'Doku', icon: PrimeIcons.FOLDER_OPEN},
      {label: 'Befunde', icon: PrimeIcons.CHART_LINE},
      {label: 'MAAs', icon: PrimeIcons.USER_PLUS},
      {label: 'bisherige Hilfen/Ansprechpartner', icon: PrimeIcons.USER_PLUS},
      {label: 'Gespräche', icon: PrimeIcons.COMMENTS}
  ];
  }

}
