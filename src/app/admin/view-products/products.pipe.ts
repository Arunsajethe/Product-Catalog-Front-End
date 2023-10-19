import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Product';
import { timer } from 'rxjs';

@Pipe({
  name: 'products',
  pure: true
})
export class ProductsPipe implements PipeTransform {

  transform(myproducts: Product[], category: any) {
   
    if(category=='All')
    {
      console.log("pipe working")
      console.log(myproducts)
      return myproducts;
    }
    else{
      console.log("fitering pipe");
      console.log(myproducts.filter(prod => prod.category == category));
      return myproducts.filter((prod)=>prod.category== category);
    }
  }

}
