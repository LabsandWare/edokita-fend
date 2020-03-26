import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/provider-checker',   title: 'Provider Checker',              icon:'nc-pin-3',      class: '' },
    { path: '/patient-list',   title: 'Account Management',              icon:'nc-pin-3',      class: '' },
    { path: '/patient-list',         title: 'Patient List',             icon:'nc-diamond',    class: '' },
    { path: '/provider-list', title: 'Provider List',     icon:'nc-bell-55',    class: '' },
    { path: '/hospital-list',          title: 'Hospital List',      icon:'nc-single-02',  class: '' },
    { path: '/pharmacy-list',         title: 'Pharmacy List',        icon:'nc-tile-56',    class: '' },
    { path: '/lab-list',    title: 'Laboratory List',        icon:'nc-caps-small', class: '' },
    { path: '/create',   title: 'Subscription Plan',              icon:'nc-pin-3',      class: '' },
    { path: '/create',   title: 'Create',              icon:'nc-pin-3',      class: '' },
    { path: '/edit',   title: 'Edit',              icon:'nc-pin-3',      class: '' },
    { path: '/sms',   title: 'Messaging',              icon:'nc-pin-3',      class: '' },
    { path: '/sms',   title: 'Sms',              icon:'nc-pin-3',      class: '' },
    { path: '/email',   title: 'Email',              icon:'nc-pin-3',      class: '' },
    { path: '/view',   title: 'HMO',              icon:'nc-pin-3',      class: '' },
    { path: '/view',   title: 'View',              icon:'nc-pin-3',      class: '' },
    { path: '/hmo-create',   title: 'Create',              icon:'nc-pin-3',      class: '' },

    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];
//
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
