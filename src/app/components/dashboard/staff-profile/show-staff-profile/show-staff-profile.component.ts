import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';

@Component({
  selector: 'app-show-staff-profile',
  templateUrl: './show-staff-profile.component.html',
  styleUrls: ['./show-staff-profile.component.css']
})
export class ShowStaffProfileComponent {
  id:any;
  user:Admin=new Admin(0,'','',new Date(),new Date(),0,'',false,'','');
  fullname='';
  constructor(private userCredintialService: UserCredintialService,private apiService:ApiService) { }

  ngOnInit(): void {
    const userCredintial:any = this.userCredintialService.getCredintial();
    const id = userCredintial.id;
    let role =userCredintial.role;
    if (role == "badmin") role = "admin";
  // console.log(role);
    this.apiService.getById(`${role}/`,id).subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
      this.user = response.data;
      this.fullname = `${this.user.fname || ""}  ${this.user.lname || ""}`;
      console.log(this.user);
    });
}
}
