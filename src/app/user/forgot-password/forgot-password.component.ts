import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { UserService } from 'src/app/user-service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email:any;
  otp:any;

  password:any;
  password1:any;
  displayPassword:boolean = false;

  hasotp:boolean=false;
  myOtp:any;
  emailCheck:any;
  hasemail:boolean=false;

  constructor(private service:UserService, private router:Router)
  {

  }

  //checking the otp entered and the otp send to the email are equla
  datasubmitted()
  {
    if(this.hasotp)
    {
      if(this.otp == this.myOtp.otp)
      {
        this.displayPassword = true;
      }
    else{
        Swal.fire({
          icon:"warning",
          title:"Otp incoorect"
        })
      }
    }
    
  }

  //to send the otp the respective email Id
  generateOtp()
  {    
      console.log('Otp Sending')
      this.service.otpGenerating(this.email).subscribe(e => {
          this.myOtp = e;
          console.log(this.myOtp);
      });

      timer(1000).subscribe(()=>{
        this.hasotp = true;

      })
  }
    
  //check that both the password are correct 
  checkPassword():boolean
  {
    if(this.password == this.password1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  //changing the password
  changePassword()
  {
    this.service.changePassword(this.email,this.password).subscribe();

    Swal.fire({
      icon:"success",
      title:"Password Updated Successfully"
    });

    this.router.navigateByUrl("/login");

  }

}
