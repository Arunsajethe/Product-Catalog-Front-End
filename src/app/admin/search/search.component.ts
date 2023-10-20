import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';
import { AdminService } from 'src/app/admin-service/admin.service';
import { LoginserviceService } from 'src/app/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  price:any;

  myList:any;

  mySearch:boolean=false;

  constructor(private service: AdminService, private route: Router, public login:LoginserviceService)
  {

  }

  dataSubmitted()
  {
    console.log(this.price);
    this.service.searchProduct(this.price).subscribe(e =>{ 
      this.myList=e;
      console.log(this.myList);
    });

    timer(300).subscribe(()=>{

      if(this.myList.length !==0)
      {
        Swal.fire({
          icon: "success",
          title: "Product Found"
        });
        this.mySearch = true;
      }
      else
      {
        Swal.fire({
          icon: "warning",
          title: "No Product Found"
        });
        this.mySearch = false;
      }
      

    });
    
  }

  remove(pname:any, category:any)
  {
    this.service.deleteProducts(pname,category).subscribe();
    interval(1000).subscribe(()=>{
      this.service.searchProduct(this.price).subscribe(e =>{ 
        this.myList=e;
        console.log(this.myList);
    });

    timer(300).subscribe(()=>{

      if(this.myList.length !==0)
      {
        Swal.fire({
          icon: "success",
          title: "Product Found"
        });
        this.mySearch = true;
      }
      else
      {
        Swal.fire({
          icon: "warning",
          title: "No Product Found"
        });
        this.mySearch = false;
      }
      

    });
      
      
    });
  }

  navigateHome()
  {
   console.log("hello")
   this.route.navigateByUrl("/**");

  }

}
