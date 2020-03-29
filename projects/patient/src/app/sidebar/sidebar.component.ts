import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    { path: '/patient',         title: 'Dashboard',         icon:'',       class: '' },
    // { path: '/email',           title: 'Send mail',             icon:'nc-diamond',    class: '' },
    { path: '/patient/profile', title: 'Update Profile',     icon:'',    class: '' },
    { path: '/patient/history', title: 'PATIENT HEALTH HISTORY', icon:'',      class: '' },
    { path: '/patient/add-dependent', title: 'Add dependent',     icon:'',    class: '' },
    { path: '/patient/medical-report',title: 'Medical Report',      icon:'',  class: '' },
    { path: '/',         title: 'Freebies',        icon:'',    class: '' },
    { path: '/patient/doctor',    title: 'Talk to a Doctor',        icon:'', class: '' },
    { path: '/patient/pharmacy',       title: 'Find Phamarcy',    icon:'',  class: 'active-pro' },
    { path: '/patient/hospital',           title: 'Find Hospital', icon:'',    class: '' },
    { path: '/patient/lab',           title: 'Find Lab', icon:'',    class: '' },
    { path: '/patient/appointment', title: 'Book an Appointment',     icon:'',    class: '' },
    { path: '/patient/prescription', title: 'My prescription', icon:'',      class: '' },
    { path: '/patient/hmo', title: 'HMO', icon:'',      class: '' },

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
