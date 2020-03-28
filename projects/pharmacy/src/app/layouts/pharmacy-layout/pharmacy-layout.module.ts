import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PharmacyLayoutRoutes } from './pharmacy-layout-routing';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'  ;
import { MatToolbarModule } from '@angular/material/toolbar'



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forChild(PharmacyLayoutRoutes),
    NgbModule
  ],
})

export class PharmacyLayoutModule { }
