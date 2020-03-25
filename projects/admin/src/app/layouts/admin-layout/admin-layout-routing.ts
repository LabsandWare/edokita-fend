import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { ProviderCheckerComponent } from '../pages/provider-checker/provider-checker.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user',           component: UserComponent },
  { path: 'provider-checker', component: ProviderCheckerComponent}
];
