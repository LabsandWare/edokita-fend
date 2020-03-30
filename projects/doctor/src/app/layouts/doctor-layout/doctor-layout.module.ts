import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DoctorLayoutRoutes } from './doctor-layout-routing';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile.component';
import { PatientHistoryComponent } from '../pages/patient-history/patient-history.component';
import { ConsultationNoteComponent } from '../pages/consultation-note/consultation-note.component';
import { ViewComponent } from '../pages/view/view.component';
import { AddScheduleComponent } from '../pages/add-schedule/add-schedule.component';
import { EditScheduleComponent } from '../pages/edit-schedule/edit-schedulecomponent';
import { SmsComponent } from '../pages/sms/sms.component';
import { EmailComponent } from '../pages/email/email.component';
import { MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    DashboardComponent,
    UpdateProfileComponent,
    PatientHistoryComponent,
    ConsultationNoteComponent,
    ViewComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    SmsComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forChild(DoctorLayoutRoutes),
    NgbModule
  ],
})

export class DoctorLayoutModule { }
