import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BasicAdminComponent } from './admin/basic-admin/basic-admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { MemberComponent } from './member/member.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminModule } from './admin/admin.module';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { IsLoginGuard } from 'src/app/guards/is-login.guard';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeModule } from './employee/employee.module';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { MemberModule } from './member/member.module';
import { AddMemberComponent } from './member/add-member/add-member.component';
import { EditMemberComponent } from './member/edit-member/edit-member.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'admin/admin', component: AdminComponent },
      { path: 'admin/basic-admin', component: BasicAdminComponent },
      { path: 'admin/add-admin', component: AddAdminComponent },
      { path: 'admin/edit-admin/:id', component: EditAdminComponent },
      { path: 'employee/employee', component: EmployeeComponent },
      { path: 'employee/add-employee', component: AddEmployeeComponent },
      { path: 'employee/edit-employee/:id', component: EditEmployeeComponent },
      { path: 'member/member', component: MemberComponent },
      { path: 'member/add-member', component: AddMemberComponent },
      { path: 'member/edit-member/:id', component: EditMemberComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    AdminModule,
    EmployeeModule,
    MemberModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
