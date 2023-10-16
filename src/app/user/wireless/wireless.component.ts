import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wireless',
  templateUrl: './wireless.component.html',
  styleUrls: ['./wireless.component.css']
})
export class WirelessComponent {

  constructor(private router:Router)
  {

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
