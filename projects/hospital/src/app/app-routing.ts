import { Routes } from '@angular/router';


import { HospitalLayoutComponent } from './layouts/hospital-layout/hospital-layout.component';

export const HospitalRoutes: Routes = [
	{
		path: 'hospital',
		redirectTo: 'dashboard',
		pathMatch: 'full',
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
