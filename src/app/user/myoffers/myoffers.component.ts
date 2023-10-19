import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service/admin.service';
import { UserService } from 'src/app/user-service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.css']
})
export class MyoffersComponent {

  myProduct:any;

  constructor(private router:Router, private service:UserService)
  {
    this.service.displayProducts().subscribe(e => this.myProduct = e);
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
