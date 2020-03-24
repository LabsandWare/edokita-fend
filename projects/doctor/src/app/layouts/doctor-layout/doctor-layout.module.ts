import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
  	DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DoctorLayoutModule { }
