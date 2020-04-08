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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlatpickrModule.forRoot(),
    AdminSharedModule.forRoot(),
    DoctorSharedModule.forRoot(),
    HospitalSharedModule.forRoot(),
    LabSharedModule.forRoot(),
    PatientSharedModule.forRoot(),
    PharmacySharedModule.forRoot(),
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: 'apiUrl', useValue: environment.baseApi }],
  bootstrap: [AppComponent]
})
export class AppModule { }
