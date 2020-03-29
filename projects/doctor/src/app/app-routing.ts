import { Routes } from '@angular/router';


import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { RegisterComponent } from './layouts/pages/register/register.component';

export const DoctorRoutes: Routes = [
	{
		path: 'doctor',
		redirectTo: 'doctor/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'doctor/register',
		component: RegisterComponent,
	},
	{
		path: 'doctor',
		component: DoctorLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./layouts/doctor-layout/doctor-layout.module').then(m => m.DoctorLayoutModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
