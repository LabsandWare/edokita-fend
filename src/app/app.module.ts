import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminSharedModule } from 'projects/admin/src/app/app.module';
import { DoctorSharedModule } from 'projects/doctor/src/app/app.module';
import { HospitalSharedModule } from 'projects/hospital/src/app/app.module';
import { LabSharedModule } from 'projects/lab/src/app/app.module';
import { PatientSharedModule } from 'projects/patient/src/app/app.module';
import { PharmacySharedModule } from 'projects/pharmacy/src/app/app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminSharedModule.forRoot(),
    DoctorSharedModule.forRoot(),
    HospitalSharedModule.forRoot(),
    LabSharedModule.forRoot(),
    PatientSharedModule.forRoot(),
    PharmacySharedModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
