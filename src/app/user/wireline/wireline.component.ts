import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-wireline',
  templateUrl: './wireline.component.html',
  styleUrls: ['./wireline.component.css']
})
export class WirelineComponent {

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
