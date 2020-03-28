import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
// import { UserComponent } from '../pages/user/user.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile';
import { ViewComponent } from '../pages/view/view.component';
import { ManViewComponent } from '../pages/man-view/man-view.component';
import { CreateComponent } from '../pages/create/create.component';

export const HospitalLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'update-profile',           component: UpdateProfileComponent },
  { path: 'view',           component:ViewComponent },
  { path: 'man-view',           component:ManViewComponent },
  { path: 'create',           component:CreateComponent},

];
