import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PatientLayoutRoutes } from './patient-layout-routing';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { ProfileComponent } from '../pages/Profile/profile/profile.component';
import { PatientHistoryComponent } from '../pages/patient-history/patient-history.component';
import { DepedentComponent } from '../pages/depedent/depedent.component';
import { MedicalReportComponent } from '../pages/medical-report/medical-report.component';
import { DoctorComponent } from '../pages/doctor/doctor.component';
import { PharmacyComponent } from '../pages/pharmacy/pharmacy.component';
import { HospitalComponent } from '../pages/hospital/hospital.component';
import { LabComponent } from '../pages/lab/lab.component';
import { AppointmentComponent } from '../pages/appointment/appointment.component';
import { Appointment1Component } from '../pages/appointment/appointment1/appointment1.component';
import { Appointment2Component } from '../pages/appointment/appointment2/appointment2.component';
import { Appointment3Component } from '../pages/appointment/appointment3/appointment3.component';
import { PrescriptionComponent } from '../pages/prescription/prescription.component';
import { HMOComponent } from '../pages/hmo/hmo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProfileComponent,
    PatientHistoryComponent,
    DepedentComponent,
    MedicalReportComponent,
    DoctorComponent,
    PharmacyComponent,
    HospitalComponent,
    LabComponent,
    AppointmentComponent,
    Appointment1Component,
    Appointment2Component,
    Appointment3Component,
    PrescriptionComponent,
    HMOComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PatientLayoutRoutes),
    NgbModule
  ],
})

export class PatientLayoutModule { }
