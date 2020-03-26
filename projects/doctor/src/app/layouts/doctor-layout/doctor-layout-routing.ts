import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
// import { UserComponent } from '../pages/user/user.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile.component';
import { PatientHistoryComponent } from '../pages/patient-history/patient-history.component';
import { ConsultationNoteComponent } from '../pages/consultation-note/consultation-note.component';
import { ViewComponent } from '../pages/view/view.component';
import { AddScheduleComponent } from '../pages/add-schedule/add-schedule.component';
import { EditScheduleComponent } from '../pages/edit-schedule/edit-schedulecomponent';
import { SmsComponent } from '../pages/sms/sms.component';
import { EmailComponent } from '../pages/email/email.component';

export const DoctorLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'patient-history', component: PatientHistoryComponent },
  { path: 'consultation-note', component: ConsultationNoteComponent },
  { path: 'view', component: ViewComponent },
  { path: 'add-schedule', component: AddScheduleComponent },
  { path: 'edit-schedule', component: EditScheduleComponent },
  { path: 'sms', component: SmsComponent },
  { path: 'email', component: EmailComponent },

];
