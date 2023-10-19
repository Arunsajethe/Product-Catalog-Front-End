import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wireless',
  templateUrl: './wireless.component.html',
  styleUrls: ['./wireless.component.css']
})
export class WirelessComponent {

  myWireline:any;

  constructor(private router:Router, private service:UserService)
  {
    this.service.getAllWireless().subscribe(e => this.myWireline = e);
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
