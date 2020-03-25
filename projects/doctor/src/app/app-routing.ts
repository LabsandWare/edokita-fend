import { Routes } from '@angular/router';


import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

export const DoctorRoutes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: '',
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
