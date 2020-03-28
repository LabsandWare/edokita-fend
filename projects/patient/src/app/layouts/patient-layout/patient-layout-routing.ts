import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { ProfileComponent } from '../pages/Profile/profile/profile.component';
import { PatientHistoryComponent } from '../pages/patient-history/patient-history.component';
import { DepedentComponent } from '../pages/depedent/depedent.component';
import { MedicalReportComponent } from '../pages/medical-report/medical-report.component';
import { DoctorComponent } from '../pages/doctor/doctor.component';
import { PharmacyComponent } from '../pages/pharmacy/pharmacy.component';


export const PatientLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'user',           component: UserComponent },
  { path: 'profile', component:ProfileComponent},
  { path: 'history', component:PatientHistoryComponent},
  { path: 'add-dependent', component:DepedentComponent},
  { path: 'medical-report', component:MedicalReportComponent},
  { path: 'doctor', component:DoctorComponent},
  { path: 'pharmacy', component:PharmacyComponent},




];
