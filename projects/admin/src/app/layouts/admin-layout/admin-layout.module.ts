import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminLayoutRoutes } from './admin-layout-routing';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
// import { UserComponent } from '../pages/user/user.component';
import { ProviderCheckerComponent } from '../pages/provider-checker/provider-checker.component';
import { PatientListComponent } from '../pages/patient-list/patient-list.component';
import { ProviderListComponent } from '../pages/provider-list/provider-list.component';
import { HospitalListComponent } from '../pages/hospital-list/hospital-list.component';
import { PharmacyListComponent } from '../pages/pharmacy-list/pharmacy-list.component';
import { LabListComponent } from '../pages/lab-list/lab-list.component';
import { CreateComponent } from '../pages/create/create.component';
import { EditComponent } from '../pages/edit/edit.component';
import { SmsComponent } from '../pages/sms/sms.component';
import { EmailComponent } from '../pages/email/email.component';
import { ViewComponent } from '../pages/view/view.component';
import { HmoCreateComponent } from '../pages/hmo-create/hmo-create.component';



@NgModule({
  declarations: [
    DashboardComponent,
   ProviderCheckerComponent,
   PatientListComponent,
   ProviderListComponent,
   HospitalListComponent,
   PharmacyListComponent,
   LabListComponent,
   CreateComponent,
   EditComponent,
   SmsComponent,
   EmailComponent,
   ViewComponent,
   HmoCreateComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule
  ],
})

export class AdminLayoutModule { }
