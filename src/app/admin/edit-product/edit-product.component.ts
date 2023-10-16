import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin-service/admin.service';
import { Sub_Product } from '../MySubProduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  myProduct:any;
  products:Product;
  subproductarr:any;

  prodName:any;
  prodCategory:any;
  loadOf:boolean = false;

  features:string[]=[];
  recommendedlist=['Consumer','Small Business', 'Enterprise']
  feature_wireless = ['1.5 GB/Day','1 GB/Day', '3 GB/Day', '5 GB/Day', 'Unlimited Internet'];
  feature_wireline = ['@ 30 Mbps Speed', '@ 40 Mbps Speed', '@ 50 Mbps Speed', '@ 60 Mbps Speed', '@ 80 Mbps Speed', '@ 100 Mbps Speed'];

  checkingSubProd:boolean=false;
  checkingProdFeature:boolean=false;
  isChecked:boolean[];
  isChecked1:boolean[];
  haserror1:boolean=false;
  callingIsChecked:boolean=false;
  smsIsChecked:boolean=false;
  wifiIsChecked:boolean=false;

  constructor(private route:ActivatedRoute, private service: AdminService)
  {
    this.products = new Product(this.prodName,0,[],this.prodCategory,[],'');
    this.isChecked=[false,true];
    this.isChecked1=[false,true];

    this.service.getSubProduct().subscribe(e => {this.subproductarr = e});

  }

  ngOnInit():void
  {
    this.route.params.subscribe((params)=>
    {
      this.prodName = params['pname'];
      this.prodCategory = params['category'];
    });

    this.featuredisplay(this.prodCategory);

    this.service.editProduct(this.prodName, this.prodCategory).subscribe(e => {
      this.myProduct = e;
      console.log(this.myProduct);

      this.loadOf = true;
    });
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

  featureValidity():boolean
  {
    if(this.products.features.length == 2 && this.products.category=="wireline" && this.products.features.includes("Unlimited Internet"))
    {
      return true;
    }
    else if(this.products.features.length == 3 && !(this.products.features.length >3) && this.products.category=="wireless" && this.products.features.includes("Unlimited Calling") && this.products.features.includes("100 SMS/Day"))
    {
      
      return true;
    }
    else
    {
      return false;
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

  maxselection:any;
  featuredisplay(cat:string)
  {
    console.log("feature");
    console.log(cat);
    if(cat=='wireline')
    {
      this.products.features=[];
       this.features=this.feature_wireline;
       this.maxselection = 2;
    }
    else if(cat == 'wireless')
    {
      this.products.features=[];
       this.features = this.feature_wireless;
       this.maxselection = 3;
    }
    else{
      this.features = [];
    }
  }

  dataSubmitted()
  {
    this.products.pname=this.prodName;
    this.products.category= this.prodCategory;
    console.log(this.products);

    this.service.updateProduct(this.products).subscribe();

    Swal.fire({
      icon:'success',
      title: 'Product Updated'
    })
  }
}
