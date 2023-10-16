import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { interval } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {

  myproducts:any;

  category=['wireline','wireless']

  defaultCategory='All'

  mylength:boolean= false;

  constructor(private service: AdminService, private router: Router)
  {
    service.displayProducts().subscribe(e=> this.myproducts=e);

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

  remove(pname:any, category:any)
  {
    this.service.deleteProducts(pname,category).subscribe();
    interval(1000).subscribe(()=>{
      this.service.displayProducts().subscribe(e => this.myproducts=e);

      if(this.myproducts.length == 0)
      {
        this.mylength = true;
      }
      else{
        this.mylength = false;
      }
      
    });
  }
  

}
