import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';


@Component({
  selector: 'app-edit-staff-profile',
  templateUrl: './edit-staff-profile.component.html',
  styleUrls: ['./edit-staff-profile.component.css']
})
export class EditStaffProfileComponent {
  staffForm: FormGroup = new FormGroup({});
  selectedFile: File= new File([''],'');
  image: File | null = null;
  user: Admin =new Admin(0,'','',new Date(),new Date(),0,'',false,'','');
  id: number = 0;
  role:any;
  city: string = '';
  street: string = '';
  building: Number = 0;
  

  constructor(private fb: FormBuilder,
    private userCredintialService: UserCredintialService,
    private router: Router,
    private apiService:ApiService ) { }

  async ngOnInit(){
    const userCredintial:any = this.userCredintialService.getCredintial();
    this.id = userCredintial.id;
    this.role=userCredintial.role;
    if (this.role == "badmin") this.role = "admin";
    let res :any =await this.apiService.getById(`${this.role}/`,this.id).toPromise();
    this.user = res.data;
    

    this.staffForm = this.fb.group({
      fname: [this.user.fname, [Validators.required]],
      lname: [this.user.lname, [Validators.required]],
      birthdate: [new Date(this.user.birthdate).toISOString().slice(0, 10), [Validators.required]],
      image: [this.user.image,],
    });
    console.log(this.user.birthdate);

  }


  onSubmit() {

    this.apiService.patch(`${this.role}/${this.id}`,this.staffForm.value).subscribe(
      (res:any) => {
        console.log(res)
        this.router.navigate(['/dashboard/staff-profile']);
      }
    );

  }

}
