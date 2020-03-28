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



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProfileComponent,
    PatientHistoryComponent,
    DepedentComponent,
    MedicalReportComponent,
    DoctorComponent,
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PatientLayoutRoutes),
    NgbModule
  ],
})

export class PatientLayoutModule { }
