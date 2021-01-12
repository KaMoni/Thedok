import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { ThedokPatientListComponent } from './thedok-patient-list/thedok-patient-list.component';
import { ThedokPatientDetailsComponent } from './thedok-patient-details/thedok-patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ThedokPatientListComponent,
    ThedokPatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
