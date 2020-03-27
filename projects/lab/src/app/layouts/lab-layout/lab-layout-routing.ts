import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile';
import { CreateComponent } from '../pages/create/create.component';
import { ViewComponent } from '../pages/view/view.component';
// import { UserComponent } from '../pages/user/user.component';

export const LabLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'update-profile',           component: UpdateProfileComponent },
  { path: 'view',           component: ViewComponent },
  { path: 'create',           component: CreateComponent },

];
