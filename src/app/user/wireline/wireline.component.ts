import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-service/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-wireline',
  templateUrl: './wireline.component.html',
  styleUrls: ['./wireline.component.css']
})
export class WirelineComponent {

  myWireless:any

  constructor(private router:Router, private service:UserService)
  {
    this.service.getAllWireline().subscribe(e => this.myWireless=e);
  }

  payment()
  {
    Swal.fire({
      icon:'success',
      title: 'Payment Success',
      text: 'Plan Activated Soon'
    });

    this.router.navigateByUrl("**");
  }

}
