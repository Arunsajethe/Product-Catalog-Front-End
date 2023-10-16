import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../admin/Product';
import { SubProduct } from '../admin/Subproduct';
import { Observable } from 'rxjs';
import { Register } from '../user/Register';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //link of Product component of spring boot
  private url:string  = "http://localhost:9002"

  //link of Sub product component of spring boot
  private url1:string = "http://localhost:9010";

  //link of Registration component of spring boot
  private url2:string = "http://localhost:9001";

  constructor(private http:HttpClient) { }

  //add product to database
  addProduct(prod:Product)
  {
    return this.http.post(`${this.url}/product`,prod);

  }
  
  //product name and category checking to storing the data 
  productNameChecking(prod:Product)
  {

    const params = new HttpParams().set('pname',prod.pname).set('category',prod.category);
    return this.http.get(`${this.url}/product`,{params});
  }

  //Get all the product from the database
  displayProducts()
  {
    return this.http.get(`${this.url}/product/display`);
  }

  //deleting the product from the database using product name and category
  deleteProducts(pname:any, category:any)
  {
    const params = new HttpParams().set('pname',pname).set('category',category);
    return this.http.delete(`${this.url}/product`,{params});
  }

  //creating or adding subproduct into the database
  addSubProduct(subproduct: SubProduct)
  {
    return this.http.post(`${this.url1}/subProducts`,subproduct);
  }

  //sub product name checking to inserting the data into database
  subProductChecking(sname:any):Observable<any>
  {
    return this.http.get<SubProduct>(`${this.url1}/subProducts/${sname}`,{responseType:'json'});
  }

  //getting all the sub product from the database
  getSubProduct()
  {
    return this.http.get<SubProduct>(`${this.url1}/subProducts`,{responseType:'json'});
  }

  //getting product details for editing or updating in the database
  editProduct(pname:string, category:string):Observable<Product>
  {
    return this.http.get<Product>(`${this.url}/product/${pname}/${category}`,{responseType:'json'});
  }

  //updating the data in the database
  updateProduct(prod:Product)
  {
    return this.http.put<Product>(`${this.url}/product`,prod,{responseType:'json'});
  }

  //searching the product using product name from the database
  searchProduct(pname:any):Observable<Product>
  {
    return this.http.get<Product>(`${this.url}/search/${pname}`,{responseType:'json'});
  }

  //getting all the register data from the database
  getRegisteration():Observable<any>
  {
    return this.http.get(`${this.url2}/register`);
  }

  //remove register data from the registration table 
  removeRegistration(email:any)
  {
    return this.http.delete(`${this.url2}/register/${email}`);
  }

  //updating checkstatus by approving and dispproving to vendor login 
  updateRegister(email:any, status:any)
  {
    return this.http.put(`${this.url2}/register`,email);
  }


}