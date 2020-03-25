import { Routes } from '@angular/router';


import { PharmacyLayoutComponent } from './layouts/pharmacy-layout/pharmacy-layout.component';

export const PharmacyRoutes: Routes = [
	{
		path: 'pharmacy',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'pharmacy',
		component: PharmacyLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./layouts/pharmacy-layout/pharmacy-layout.module').then(m => m.PharmacyLayoutModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
