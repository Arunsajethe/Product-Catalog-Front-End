import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin-service/admin.service';
import { Product } from '../Product';
import { timer } from 'rxjs';
import { Sub_Product } from '../MySubProduct';
import Swal from 'sweetalert2';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  editForm: FormGroup;

  prodName:any;
  prodCategory:any;
  myProduct:any;
  pname:FormControl;
  category:FormControl;
  validity:FormControl;
  recommended:FormControl;
  features:FormControl;
  subproducts:FormControl;

  hasSubproduct:boolean=false;

  recommendedlist=['Consumer','Small Business','Enterprise'];
  feature_wireless = ['1.5 GB/Day','1 GB/Day', '3 GB/Day', '5 GB/Day', 'Unlimited Internet'];
  feature_wireline = ['@ 30 Mbps Speed', '@ 40 Mbps Speed', '@ 50 Mbps Speed', '@ 60 Mbps Speed', '@ 80 Mbps Speed', '@ 100 Mbps Speed'];
  myfeatures:any;
  subproductarr:any;
  selectedSubproduct:any;
  selectedFeatures:any;
  mySubproduct:any=[];
  mySelectedSubproduct:any=[];
  status:any;

  constructor(private route:ActivatedRoute, private service:AdminService, private login:LoginserviceService)
  {
      service.getSubProduct().subscribe(e => {this.subproductarr = e});


      this.route.params.subscribe((params)=>
      {
        this.prodName = params['pname'];
        this.prodCategory = params['category'];
      });

      console.log(this.prodName);
      console.log(this.prodCategory);

      if(this.prodCategory=="wireline")
      {
        this.myfeatures = this.feature_wireline;
      }
      else
      {
        this.myfeatures = this.feature_wireless;
      }
      

      timer(1000)
      this.pname = new FormControl(this.prodName,[Validators.required])
      this.category = new FormControl(this.prodCategory,[Validators.required])
      this.validity = new FormControl(0,[Validators.required, Validators.max(366), Validators.min(27)])
      this.recommended = new FormControl('',[Validators.required])
      this.features = new FormControl([],[Validators.required])
      this.subproducts = new FormControl([],[Validators.required])
      this.editForm = new FormGroup({   
        pname:this.pname,
        category:this.category,
        validity:this.validity,
        recommended:this.recommended,
        features:this.features,
        subproducts:this.subproducts,
       });


  }

  ngOnInit():void
  {
    this.service.editProduct(this.prodName, this.prodCategory).subscribe(e => {
      this.myProduct = e;
      console.log(this.myProduct);

      this.status = this.myProduct?.status;
      this.editForm.get('recommended')?.setValue(this.myProduct?.recommended);
      this.editForm.get('validity')?.setValue(this.myProduct?.validity);
      this.editForm.get('features')?.setValue(this.myProduct?.features);
      this.selectedSubproduct = this.myProduct?.subproducts;
      this.selectedFeatures = this.myProduct?.features;

      
      for (let k of this.selectedSubproduct)
      {
        console.log(k);
        this.mySelectedSubproduct.push(new Sub_Product(k.sname));
        this.mySubproduct.push(k.sname);
      }

      this.editForm.get('subproducts')?.setValue(this.mySelectedSubproduct)

  
      });
    
  }

  updatingFeatures(feat:any)
  {
    if(this.editForm.value.features.includes(feat))
    {
      this.editForm.value.features = this.editForm.value.features.filter((i:any) => i !==feat)
    }
    else
    {
      if(this.prodCategory==='wireline')
      {
        this.editForm.value.features=['Unlimited Internet'];
      }
      else
      {
        this.editForm.value.features=['Unlimited Calling',"100 SMS/Day"];
      }
      this.editForm.value.features.push(feat);
    }
  }

  updatingSubproduct(sub:any)
  {
      this.hasSubproduct = false;
      for(let subp of this.editForm.value.subproducts)
      {

        if(subp.sname === sub)
        {
          this.hasSubproduct = true;
          this.editForm.value.subproducts = this.editForm.value.subproducts.filter((j:any) => j.sname !==sub)
          console.log(this.editForm.value.subproducts); 
        }
        
      }

      if(!this.hasSubproduct)
      {
         this.editForm.value.subproducts.push(new Sub_Product(sub));
         console.log(this.editForm.value.subproducts);
      }

  }
  
  haserror1:boolean=false;
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

  dataSubmitted()
  {
    const email = this.login.getEmail();
    const user = this.login.getUsername();
    const update = {email:email,user:user,status:this.status, ...this.editForm.value};
    this.service.updateProduct(update).subscribe();

    Swal.fire({
      icon:"success",
      title:"Updated Succesfully"
    });
  }


}
