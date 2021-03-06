import { Routes } from '@angular/router';


import { HospitalLayoutComponent } from './layouts/hospital-layout/hospital-layout.component';
import { RegisterComponent } from './layouts/pages/register/register.component';

export const HospitalRoutes: Routes = [
	{
		path: 'hospital',
		redirectTo: 'hospital/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'hospital/register',
		component: RegisterComponent,
	},
	{
		path: 'hospital',
		component: HospitalLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./layouts/hospital-layout/hospital-layout.module').then(m => m.HospitalLayoutModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
