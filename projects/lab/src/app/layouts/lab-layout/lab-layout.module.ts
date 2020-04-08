import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LabLayoutRoutes } from './lab-layout-routing';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile';
import { CreateComponent } from '../pages/create/create.component';
import { ViewComponent } from '../pages/view/view.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { UserComponent } from '../pages/user/user.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UpdateProfileComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forChild(LabLayoutRoutes),
    NgbModule
  ],
})

export class LabLayoutModule { }
