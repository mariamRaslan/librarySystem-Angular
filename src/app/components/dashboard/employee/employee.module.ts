import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [EmployeeComponent, AddEmployeeComponent, EditEmployeeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class EmployeeModule {}
