import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    { path: '/patient',         title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/email',           title: 'Send mail',             icon:'nc-diamond',    class: '' },
    { path: '/patient/profile', title: 'Update Profile',     icon:'nc-bell-55',    class: '' },
    { path: '/patient/history', title: 'PATIENT HEALTH HISTORY', icon:'nc-pin-3',      class: '' },
    { path: '/patient/add-dependent', title: 'Add dependent',     icon:'nc-bell-55',    class: '' },
    { path: '/patient/medical-report',title: 'Medical Report',      icon:'nc-single-02',  class: '' },
    { path: '/',         title: 'Freebies',        icon:'nc-tile-56',    class: '' },
    { path: '/patient/doctor',    title: 'Talk to a Doctor',        icon:'nc-caps-small', class: '' },
    { path: '/patient/pharmacy',       title: 'Find Phamarcy',    icon:'nc-spaceship',  class: 'active-pro' },
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
