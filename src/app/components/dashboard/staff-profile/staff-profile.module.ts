import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowStaffProfileComponent } from './show-staff-profile/show-staff-profile.component';
import { EditStaffProfileComponent } from './edit-staff-profile/edit-staff-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'staff-profile',component:ShowStaffProfileComponent},
  {path:'edit-staff-profile',component:EditStaffProfileComponent},
  
 
  ];

@NgModule({
  declarations: [
    ShowStaffProfileComponent,
    EditStaffProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class StaffProfileModule { }
