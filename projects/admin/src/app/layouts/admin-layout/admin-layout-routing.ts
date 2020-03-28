import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProviderCheckerComponent } from '../pages/provider-checker/provider-checker.component';
import { PatientListComponent } from '../pages/patient-list/patient-list.component';
import { HospitalListComponent } from '../pages/hospital-list/hospital-list.component';
import { PharmacyListComponent } from '../pages/pharmacy-list/pharmacy-list.component';
import { LabListComponent } from '../pages/lab-list/lab-list.component';
import { CreateComponent } from '../pages/create/create.component';
import { EditComponent } from '../pages/edit/edit.component';
import { SmsComponent } from '../pages/sms/sms.component';
import { EmailComponent } from '../pages/email/email.component';
import { ViewComponent } from '../pages/view/view.component';
import { HmoCreateComponent } from '../pages/hmo-create/hmo-create.component';
import { ProviderListComponent } from '../pages/provider-list/provider-list.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'provider-checker', component: ProviderCheckerComponent},
  { path: 'patient-list', component: PatientListComponent},
  { path: 'provider-list', component: ProviderListComponent},
  { path: 'hospital-list', component: HospitalListComponent},
  { path: 'pharmacy-list', component: PharmacyListComponent},
  { path: 'lab-list', component: LabListComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit', component: EditComponent},
  { path: 'sms', component: SmsComponent},
  { path: 'email', component: EmailComponent},
  { path: 'hmo-view', component: ViewComponent},
  { path: 'hmo-create', component: HmoCreateComponent},
 
];
