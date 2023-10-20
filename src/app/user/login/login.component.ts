import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { LoginserviceService } from 'src/app/loginservice.service';
import { login } from '../login';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  log:login;

  constructor(private service: LoginserviceService, private router: Router, private session: SessionStorageService)
  {
    this.log = new login('','');
  }

  datasubmitted()
  {
     const temp = this.service.loginValidity(this.log.email,this.log.password)
      timer(1000).subscribe(()=>{
      if(temp)
     {
        Swal.fire({
          icon:'success',
          title: 'Welcome Admin'
        });
        this.router.navigateByUrl('/homepage');
     }
     else
     {
        Swal.fire({
          icon: 'error',
          title: 'User Credential Wrong'
        });
     }

      })

     
  }
}
