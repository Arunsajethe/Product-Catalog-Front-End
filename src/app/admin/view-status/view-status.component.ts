import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent {

  myproducts:any;
  mylength:any;

  constructor(private service:AdminService, private route:Router, public login:LoginserviceService)
  {
    service.getAllProduct().subscribe(e=> this.myproducts=e);

    timer(1000).subscribe(()=>{
      if(this.myproducts.length == 0)
      {
        this.mylength = true;
      }
      else{
        this.mylength = false;
      }
    })
  }

  navigateHome()
  {
   console.log("hello")
   this.route.navigateByUrl("/**");

  }


}
