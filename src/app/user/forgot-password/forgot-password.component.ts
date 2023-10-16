import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { UserService } from 'src/app/user-service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email:any;

  otp:any;

  hasotp:boolean=false;
  myOtp:any;

  constructor(private service:UserService)
  {

  }

  datasubmitted()
  {

  }

  generateOtp()
  {
    console.log('Otp Sending')
     this. myOtp = this.service.otpGenerating(this.email).subscribe();

    timer(1000).subscribe(()=>{
    })

    this.hasotp = true;


  }

}
