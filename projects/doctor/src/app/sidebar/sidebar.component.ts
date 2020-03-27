import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/update-profile',         title: 'Update Profile',             icon:'nc-diamond',    class: '' },
    { path: '/patient-history',          title: 'Patient History',              icon:'nc-globe',      class: '' },
    { path: '/consultation-note', title: 'Consultation Note',     icon:'nc-bell-55',    class: '' },
    { path: '/#',          title: 'Manage Appointment',      icon:'nc-single-02',  class: 'dim' },
    { path: '/view',         title: 'View',        icon:'nc-tile-56',    class: '' },
    { path: '/add-schedule',    title: 'Add Schedule',        icon:'nc-caps-small', class: '' },
    { path: '/edit-schedule',       title: 'Edit Schedule',    icon:'nc-spaceship',  class: 'active-pro' },
    { path: '/#',       title: 'Follow up Patient',    icon:'nc-spaceship',  class: 'dim' },
    { path: '/sms',       title: 'Sms',    icon:'nc-spaceship',  class: 'active-pro' },
    { path: '/email',       title: 'Email',    icon:'nc-spaceship',  class: 'active-pro' },

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
