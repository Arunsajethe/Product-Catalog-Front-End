import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent {

  myProduct:any;
  mylength:any;
  hasdisplay:boolean=false;
  pname:any;
  category:any;
  operation:any;
  
  

  constructor(private service:AdminService)
  {
    this.service.getAllProduct().subscribe(e =>{
      this.myProduct = e;
    });
    this.hasdisplay=true;

    timer(1000).subscribe(()=>{
      if(this.myProduct.length == 0)
      {
        this.mylength = true;
      }
      else{
        this.mylength = false;
      }
      
    })


  }

  dataSubmitted(pname:any,category:any,oper:any)
  {
    console.log(pname);
    console.log(oper);      
    
    this.service.acceptingProduct(pname,category,oper,'Super Admin has approved your Product').subscribe();

    if(oper == 'approve')
    {
      Swal.fire({
        icon:"success",
        title:"Product approved"
      });
    }
    else
    {
      Swal.fire({
        icon:"success",
        title:"Product disapproved"
      });
    }

    this.service.getAllProduct().subscribe(e =>{
      this.myProduct = e;
    });
    this.hasdisplay=true;

    timer(1000).subscribe(()=>{
      if(this.myProduct.length == 0)
      {
        this.mylength = true;
      }
      else{
        this.mylength = false;
      }});

  }

  
}
