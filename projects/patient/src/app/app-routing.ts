import { Routes } from '@angular/router';


import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';

export const PatientRoutes: Routes = [
	{
		path: 'patient',
		redirectTo: 'patient/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'patient',
		component: PatientLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./layouts/patient-layout/patient-layout.module').then(m => m.PatientLayoutModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
