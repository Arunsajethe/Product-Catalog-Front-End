import { Component } from '@angular/core';
import { Register } from '../Register';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-service/user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  haserror:boolean=false;
  haserror2:boolean=false;
  register:Register;

  check:any;
  emailerror:boolean=false;

  genderlist=['Male','Female'];
  
  constructor(private router: Router, private userservice: UserService){
    this.register= new Register('','','','','',0,'','','')
  }

  ageValidation(age:number)
  {
    if(age>18 && age<100)
    {
      this.haserror=true;
    }
    else
    {
      this.haserror=false;
    }
  }

  validate(gender:any)
  {
    if(gender==="default")
    {
      this.haserror2=true
    }
    else
    {
      this.haserror2=false;
    }
  }

  datasubmit()
  {
    this.userservice.emailchecking(this.register.email).subscribe(e=> this.check=e);

    timer(1000).subscribe(()=>{
      console.log(this.check);

      if(this.check.length==0)
     {
      this.userservice.addRegister(this.register).subscribe();
      Swal.fire({
        icon:'success',
        title: 'Registration Succes',
        text: 'Wait till super admin approves you'
      });
      this.router.navigateByUrl("/login");
      return true;
     }
     else{
      Swal.fire({
        icon:'error',
        title: 'Registration Failure',
        text: 'Email Id Already Exists'
      });
      return false;
     }

    })
    

     
    
  }


}
