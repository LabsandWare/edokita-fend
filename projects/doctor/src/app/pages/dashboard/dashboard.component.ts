import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SupervisorComponent } from '../supervisor/supervisor.component';
import { EmployeeComponent } from '../employee/employee.component';

import { Staff } from '../../../model/staff.model';
import { StaffsService } from '../../../services/staffs.service';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    employee: any;
    supervisor: any;
    supervisors: any = [];

    constructor(public dialog: MatDialog, 
      private staffsService: StaffsService
    ) {}

    ngOnInit() {
      this.employee = EmployeeComponent;
      this.supervisor = SupervisorComponent;
      this.getSupervisors();
      this.getEmployees();
    }

    openDialog(dialog: any): void {
      const dialogRef = this.dialog.open(dialog, {
        width: '50%',
      });
    }

    getSupervisors() {
      this.staffsService.getSupervisor()
        .subscribe((res: any) => {
          this.supervisors = res.result;
        }); 
    }

    getEmployees() {
      this.staffsService.getSupervisor()
        .subscribe((res: any) => {
          this.supervisors = res.result;
        }); 
    }

}
