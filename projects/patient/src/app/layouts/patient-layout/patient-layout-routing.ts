import { Routes } from '@angular/router';

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
// import { RegisterComponent } from '../pages/register/register.component';

export const PatientLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'user',           component: UserComponent },
  { path: 'profile', component:ProfileComponent},
  { path: 'history', component:PatientHistoryComponent},
  { path: 'add-dependent', component:DepedentComponent},
  { path: 'medical-report', component:MedicalReportComponent},
  { path: 'doctor', component:DoctorComponent},
  { path: 'pharmacy', component:PharmacyComponent},
  { path: 'hospital', component:HospitalComponent},
  { path: 'lab', component:LabComponent},
  { path: 'appointment', component:AppointmentComponent},
  { path: 'appointment1', component:Appointment1Component},
  { path: 'appointment2', component:Appointment2Component},
  { path: 'appointment3', component:Appointment3Component},
  { path: 'prescription', component:PrescriptionComponent},
  { path: 'hmo', component:HMOComponent},
  // { path: 'register', component:RegisterComponent},









];
