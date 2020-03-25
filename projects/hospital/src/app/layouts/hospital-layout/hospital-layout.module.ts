import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HospitalLayoutRoutes } from './hospital-layout-routing';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HospitalLayoutRoutes),
    NgbModule
  ],
})

export class HospitalLayoutModule { }
