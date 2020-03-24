import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

const routes: Routes = [
	{
	  path: '',
	  redirectTo: 'dashboard',
	  pathMatch: 'full',
	}, {
	  path: '',
	  component: DoctorLayoutComponent,
	  children: [
	      {
	    path: '',
	    loadChildren: () => import('./layouts/doctor-layout/doctor-layout.component').then(m => m.DoctorLayoutComponent)
	}]},
	{
	  path: '**',
	  redirectTo: 'dashboard'
	}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
