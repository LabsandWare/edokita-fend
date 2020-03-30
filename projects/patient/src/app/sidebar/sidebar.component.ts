import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',         title: 'Dashboard',         icon:'',       class: '' },
    // { path: '/email',           title: 'Send mail',             icon:'nc-diamond',    class: '' },
    { path: '/profile', title: 'Update Profile',     icon:'',    class: '' },
    { path: '/history', title: 'PATIENT HEALTH HISTORY', icon:'',      class: '' },
    { path: '/add-dependent', title: 'Add dependent',     icon:'',    class: '' },
    { path: '/medical-report',title: 'Medical Report',      icon:'',  class: '' },
    { path: '/',         title: 'Freebies',        icon:'',    class: '' },
    { path: '/doctor',    title: 'Talk to a Doctor',        icon:'', class: '' },
    { path: '/pharmacy',       title: 'Find Phamarcy',    icon:'',  class: 'active-pro' },
    { path: '/hospital',           title: 'Find Hospital', icon:'',    class: '' },
    { path: '/lab',           title: 'Find Lab', icon:'',    class: '' },
    { path: '/appointment', title: 'Book an Appointment',     icon:'',    class: '' },
    { path: '/prescription', title: 'My prescription', icon:'',      class: '' },
    { path: '/hmo', title: 'HMO', icon:'',      class: '' },

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
