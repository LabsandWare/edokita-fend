import { Routes } from '@angular/router';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AdminRoutes: Routes = [
	{
		path: 'admin',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'admin',
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
