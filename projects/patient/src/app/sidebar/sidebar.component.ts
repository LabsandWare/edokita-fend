import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/profile-update',         title: 'Profile Update',             icon:'nc-diamond',    class: '' },
    // { path: '/pat-hea-his',          title: 'Patient Health History',              icon:'nc-pin-3',      class: '' },
    // { path: '/add-dependent', title: 'Add Dependent',     icon:'nc-bell-55',    class: '' },
    // { path: '/medical-report',          title: 'Medical Report',      icon:'nc-single-02',  class: '' },
    // { path: '/talk-to-doctor',         title: 'Talk to a Doctor',        icon:'nc-tile-56',    class: '' },
    // { path: '/find-pharmacy',    title: 'Find Pharmacy',        icon:'nc-caps-small', class: '' },
    // { path: '/find-hospital',       title: 'Find Hospital',    icon:'nc-spaceship',  class: 'active-pro' },
    // { path: '/find-lab',       title: 'Find Lab',    icon:'nc-spaceship',  class: 'active-pro' },
    // { path: '/book-appointment',       title: 'Book Appointment',    icon:'nc-spaceship',  class: 'active-pro' },
    // { path: '/my-prescription',       title: 'My Prescription',    icon:'nc-spaceship',  class: 'active-pro' },
    // { path: '/hmo',       title: 'HMO',    icon:'nc-spaceship',  class: 'active-pro' },
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
