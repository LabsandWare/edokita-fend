import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';

export const PatientLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'profile-update',           component: UserComponent },
  { path: 'pat-hea-his',           component: UserComponent },
  { path: 'add-dependent',           component: UserComponent },
  { path: 'medical-report',           component: UserComponent },
  { path: 'talk-to-doctor',           component: UserComponent },
  { path: 'find-pharmacy',           component: UserComponent },
  { path: 'find-hospital',           component: UserComponent },
  { path: 'find-lab',           component: UserComponent },
  { path: 'book-appointment',           component: UserComponent },
  { path: 'my-prescription',           component: UserComponent },
  { path: 'hmo',           component: UserComponent },
];
