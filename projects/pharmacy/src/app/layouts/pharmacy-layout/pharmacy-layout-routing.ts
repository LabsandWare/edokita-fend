import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile.component';
import { PendingComponent } from '../pages/pending/pending.component';
import { DispenseComponent } from '../pages/dispense/dispense.component';


export const PharmacyLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user',           component: UserComponent },
  { path: 'update-profile',           component: UpdateProfileComponent },
  { path: 'pending',           component: PendingComponent },
  { path: 'dispense',           component: DispenseComponent },



];
