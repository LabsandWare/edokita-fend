import { Routes } from '@angular/router';


import { PharmacyLayoutComponent } from './layouts/pharmacy-layout/pharmacy-layout.component';
import { RegisterComponent } from './layouts/pages/register/register.component';

export const PharmacyRoutes: Routes = [
	{
		path: 'pharmacy',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'pharmacy/register',
		component: RegisterComponent	
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
