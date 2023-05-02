import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';

@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss']
})
export class DashNavbarComponent {

  user: Admin =new Admin(0,'','',new Date(),new Date(),0,'',false,'','');
  id: number = 0;
  role:any;
  constructor(
    private userCredintialService: UserCredintialService,
    private apiService:ApiService ) { }
  async ngOnInit(){
    const userCredintial:any = this.userCredintialService.getCredintial();
    this.id = userCredintial.id;
    this.role=userCredintial.role;
    if (this.role == "badmin") this.role = "admin";
    let res :any =await this.apiService.getById(`${this.role}/`,this.id).toPromise();
    this.user = res.data;
  }

}
