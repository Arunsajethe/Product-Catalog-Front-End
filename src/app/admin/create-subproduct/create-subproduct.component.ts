import { Component } from '@angular/core';
import { SubProduct } from '../Subproduct';
import { timer } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-subproduct',
  templateUrl: './create-subproduct.component.html',
  styleUrls: ['./create-subproduct.component.css']
})
export class CreateSubproductComponent {

  constructor(private service: AdminService)
  {
    this.subproduct= new SubProduct('','','');
  }

  subproduct:SubProduct;

  mycheck:any;

  datasubmit()
  {
    this.service.subProductChecking(this.subproduct.sname).subscribe(e=>{this.mycheck=e;
      console.log(this.mycheck);
    });

    timer(1000).subscribe(()=>{

      console.log(this.mycheck)
      if(this.mycheck.length ==0)
      {
        this.service.addSubProduct(this.subproduct).subscribe();

        Swal.fire({
          icon:'success',
          title:'Sub-Product Created ',
          text:'Sub-Product created Successfully'
        });

      }
      else{
        Swal.fire({
          icon:"warning",
          title:"Name Already exist",
          text: "Sub-Product name is already available !!!"
        })
      }
      
    })


  }

}
