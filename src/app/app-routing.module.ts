import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSharedModule } from 'projects/admin/src/app/app.module';
import { DoctorSharedModule } from 'projects/doctor/src/app/app.module';
import { HospitalSharedModule } from 'projects/hospital/src/app/app.module';
import { LabSharedModule } from 'projects/lab/src/app/app.module';
import { PatientSharedModule } from 'projects/patient/src/app/app.module';
import { PharmacySharedModule } from 'projects/pharmacy/src/app/app.module';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: '', component:AppComponent,
  children:[
    {path: 'admin', loadChildren: () => import('projects/admin/src/app/app.module').then(m => m.AdminSharedModule)},
    {path: 'doctor', loadChildren: () => import('projects/doctor/src/app/app.module').then(m => m.DoctorSharedModule)},
    {path: 'patient', loadChildren: () => import('projects/patient/src/app/app.module').then(m => m.PatientSharedModule)},
    {path: 'lab', loadChildren: () => import('projects/lab/src/app/app.module').then(m => m.LabSharedModule)},
    {path: 'hospital', loadChildren: () => import('projects/hospital/src/app/app.module').then(m => m.HospitalSharedModule)},
    {path: 'pharmacy', loadChildren: () => import('projects/pharmacy/src/app/app.module').then(m => m.PharmacySharedModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminSharedModule.forRoot(),
    DoctorSharedModule.forRoot(),
    HospitalSharedModule.forRoot(),
    LabSharedModule.forRoot(),
    PatientSharedModule.forRoot(),
    PharmacySharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
