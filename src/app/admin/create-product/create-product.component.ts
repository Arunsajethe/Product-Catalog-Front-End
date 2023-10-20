import { Component } from '@angular/core';
import { Product } from '../Product';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/admin-service/admin.service';
import { timer } from 'rxjs';
import { Sub_Product } from '../MySubProduct';
import { LoginserviceService } from 'src/app/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  products:Product

  haserror:boolean=false;

  haserror1:boolean=false;

  features:string[]=[];

  checkingSubProd:boolean=false;

  checkingProdFeature:boolean=false;

  feature_wireless = ['1.5 GB/Day','1 GB/Day','2 GB/Day', '3 GB/Day', '5 GB/Day', 'Unlimited Internet'];

  feature_wireline = ['@ 30 Mbps Speed', '@ 40 Mbps Speed', '@ 50 Mbps Speed', '@ 60 Mbps Speed', '@ 80 Mbps Speed', '@ 100 Mbps Speed'];

  subproductarr:any;

  isChecked:boolean[];

  isChecked1:boolean[];

  callingIsChecked:boolean=false;

  smsIsChecked:boolean=false;

  wifiIsChecked:boolean=false;
  mail:any;
  firstName:any;

  constructor(private adminservice: AdminService, private service:LoginserviceService, private route:Router, public login:LoginserviceService)
  {
    const email = this.service.getEmail();
    const user = this.service.getUsername();
    this.mail = email
    this,this.firstName= user;
    console.log(email);
    console.log(user);
    
    this.products = new Product('',0,[],'',[],'',email,user,'pending','Wait till super admin approve the product');
    this.isChecked=[false,true];
    this.isChecked1=[false,true];

    this.adminservice.getSubProduct().subscribe(e => {this.subproductarr = e});

  }

  categorylist=['wireline','wireless']

  recommendedlist=['Consumer','Small Business', 'Enterprise']

  categoryValidity(category:any)
  {
    if(category==='default')
    {
      this.haserror=true;
    }
    else
    {
      this.haserror=false;
    }
  }

  recommentedValidity(category:any)
  {
    if(category==='default')
    {
      this.haserror1=true;
    }
    else
    {
      this.haserror1=false;
    }
  }

  featuredisplay(cat:string)
  {
    console.log("feature");
    console.log(cat);
    if(cat=='wireline')
    {
      this.products.features=[];
       this.features=this.feature_wireline;
    }
    else if(cat == 'wireless')
    {
      this.products.features=[];
       this.features = this.feature_wireless;
    }
    else{
      this.features = [];
    }
  }

  assignFeature(prodF:any,valu:any)
  {
    this.checkingProdFeature=true;
    if(valu)
    {
      this.products.features.push(prodF);
      console.log(this.products.features)
    }
    else
    {
      this.products.features = this.products.features.filter(item => item!==prodF)
    }
    
  }

  checkedSupProduct(subP:any,valu:any)
  {
    this.checkingSubProd=true;

    if(valu)
    {
      this.products.subproducts.push(new Sub_Product(subP));
      console.log(this.products.subproducts)
    }
    else
    {
      this.products.subproducts = this.products.subproducts.filter(item=> item.sname!==subP)
      console.log(this.products.subproducts)
    }
  }

  featureValidity():boolean
  {
    if(this.products.features.length == 2 && this.products.category=="wireline")
    {
      return true;
    }
    else if(this.products.features.length == 3 && this.products.category=="wireless")
    {
      
      return true;
    }
    else
    {
      return false;
    }
  }

  subProductValidity():boolean
  {
    if(this.products.subproducts.length >=1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  nameCheck:any;
  
  dataSubmitted()
  {

    this.adminservice.productNameChecking(this.products).subscribe(e=> this.nameCheck=e);

    timer(1000).subscribe(()=>{

      console.log(this.nameCheck);
      
      if(this.nameCheck.length==0)
      {
        timer(1000).subscribe(()=>{
          console.log(this.products);
          
          this.adminservice.addProduct(this.products).subscribe();
          if(this.mail=='superadmin')
          {
            Swal.fire({
              icon:'success',
              title: 'Product Created'
            });
          }
          else
          {
            Swal.fire({
              icon:'success',
              title: 'Product Created',
              text: 'Wait for Admin to accept the product'
            });
          }
        })
        
      }
      else
      {
        Swal.fire({
          icon:'warning',
          title: 'Product Name  Exist',
          text: "Product Name is already available in that category use some other name!!!"
        });
      }

    })

    
  }

  navigateHome()
  {
   console.log("hello")
   this.route.navigateByUrl("/**");

  }


}
