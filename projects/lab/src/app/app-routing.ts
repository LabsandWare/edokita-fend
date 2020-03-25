import { Routes } from '@angular/router';


import { LabLayoutComponent } from './layouts/lab-layout/lab-layout.component';

export const LabRoutes: Routes = [
	{
		path: 'lab',
		redirectTo: 'dashboard',
		pathMatch: 'full',
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
