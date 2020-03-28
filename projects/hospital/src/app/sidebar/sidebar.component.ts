import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/update-profile',          title: 'Update Profile',              icon:'nc-pin-3',      class: '' },
    { path: '#',         title: 'Manage Appointment',             icon:'nc-diamond',    class: 'dim' },
    { path: '/view', title: 'view',     icon:'nc-bell-55',    class: '' },
    { path: '#',          title: 'Manage Services',      icon:'nc-single-02',  class: 'dim' },
    { path: '/man-view',         title: 'view',        icon:'nc-tile-56',    class: '' },
    { path: '/create',    title: 'create',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
