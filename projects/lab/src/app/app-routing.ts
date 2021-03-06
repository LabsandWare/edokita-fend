import { Routes } from '@angular/router';


import { LabLayoutComponent } from './layouts/lab-layout/lab-layout.component';
import { RegisterComponent } from './layouts/pages/register/register.component';

export const LabRoutes: Routes = [
	{
		path: 'lab',
		redirectTo: 'lab/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'lab/register',
		component: RegisterComponent,
	},
	{
		path: 'lab',
		component: LabLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./layouts/lab-layout/lab-layout.module').then(m => m.LabLayoutModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
