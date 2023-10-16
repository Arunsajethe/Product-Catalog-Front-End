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
      timer(1000).subscribe(()=>{
        const fitlerproducts = myproducts.filter((prod)=>{prod.category==="wireless"});
      console.log(fitlerproducts);
      })
      
      return myproducts.filter((prod)=>{prod.category===`${category}`});
    }
  }

}
