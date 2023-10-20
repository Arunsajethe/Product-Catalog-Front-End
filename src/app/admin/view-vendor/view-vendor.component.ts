import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';
import { LoginserviceService } from 'src/app/loginservice.service';
import { Register } from 'src/app/user/Register';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent {

  myRegisters:any;
  hasdisplay:boolean= false;

  constructor(private service: AdminService, private route:Router, public login: LoginserviceService)
  {
    this.displayRegister();
    this.hasdisplay=true;
  }

  displayRegister()
  {
    return this.service.getRegisteration().subscribe(e => {
      console.log(e);
      this.myRegisters=e;
      
    });

  }

  dataSubmitted(email:any,oper:any)
  {
    console.log(email);
    console.log(oper);

    if(oper=='Remove')
    {
      this.service.removeRegistration(email).subscribe();
    }
    else
    {
      this.service.updateRegister(email,oper).subscribe();
      timer(1000).subscribe(()=>{
        this.service.mailResponse(email,oper).subscribe();
      });

    }

    if(oper == 'Approve')
    {
      Swal.fire({
        icon:"success",
        title:"Vendor Account approved"
      });
    }
    else
    {
      Swal.fire({
        icon:"success",
        title:"Vendor Account deactivated"
      });
    }

  }

  navigateHome()
  {
   console.log("hello")
   this.route.navigateByUrl("/**");

  }

}
