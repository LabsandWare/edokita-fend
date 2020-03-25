import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';

export const LabLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'user',           component: UserComponent }
];