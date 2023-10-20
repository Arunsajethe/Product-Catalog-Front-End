import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';
import { LoginserviceService } from 'src/app/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-disapprove',
  templateUrl: './disapprove.component.html',
  styleUrls: ['./disapprove.component.css']
})
export class DisapproveComponent {

  prodName:any;
  prodCategory:any;
  myProducts:any;
  reason:any;

  constructor(private route:ActivatedRoute, private service:AdminService, private router:Router, public login:LoginserviceService)
  {
    this.route.params.subscribe((params)=>
      {
        this.prodName = params['pname'];
        this.prodCategory = params['category'];
      });

      timer(1000)
      this.service.editProduct(this.prodName, this.prodCategory).subscribe(e => {
        this.myProducts = e;
        console.log(this.myProducts);
      });

  }

  dataSubmitted()
  {
    this.service.acceptingProduct(this.prodName,this.prodCategory,'disapprove', this.reason).subscribe();
    Swal.fire({
      icon:"success",
      title:"Product Disapproved Succesfully"
    });

    this.router.navigateByUrl("//productcontrol");
  }

  navigateHome()
  {
   console.log("hello")
   this.router.navigateByUrl("/**");

  }

}
