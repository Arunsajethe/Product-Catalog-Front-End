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
  private url:string  = "http://localhost:1002"

  //link of Sub product component of spring boot
  private url1:string = "http://localhost:1008";

  //link of Registration component of spring boot
  private url2:string = "http://localhost:1005";

  //link of Otp Sending of spring boot backend
  private url3:string = "http://localhost:1003";

  constructor(private http:HttpClient) { }

  //add product to database
  addProduct(prod:Product)
  {
    return this.http.post(`${this.url}/productSpring/product`,prod);

  }
  
  //product name and category checking to storing the data 
  productNameChecking(prod:Product)
  {

    const params = new HttpParams().set('pname',prod.pname).set('category',prod.category);
    return this.http.get(`${this.url}/productSpring/product`,{params});
  }

  //Get all the product from the database
  displayProducts()
  {
    return this.http.get(`${this.url}/productSpring/product/display`);
  }

  //deleting the product from the database using product name and category
  deleteProducts(pname:any, category:any)
  {
    const params = new HttpParams().set('pname',pname).set('category',category);
    return this.http.delete(`${this.url}/productSpring/product`,{params});
  }

  //creating or adding subproduct into the database
  addSubProduct(subproduct: SubProduct)
  {
    return this.http.post(`${this.url1}/subproductSpring/subProducts`,subproduct);
  }

  //sub product name checking to inserting the data into database
  subProductChecking(sname:any):Observable<any>
  {
    return this.http.get<SubProduct>(`${this.url1}/subproductSpring/subProducts/${sname}`,{responseType:'json'});
  }

  //getting all the sub product from the database
  getSubProduct()
  {
    return this.http.get<SubProduct>(`${this.url1}/subproductSpring/subProducts`,{responseType:'json'});
  }

  //getting product details for editing or updating in the database
  editProduct(pname:string, category:string):Observable<Product>
  {
    return this.http.get<Product>(`${this.url}/productSpring/product/${pname}/${category}`,{responseType:'json'});
  }

  //updating the data in the database
  updateProduct(prod:Product)
  {
    return this.http.put<Product>(`${this.url}/productSpring/product`,prod,{responseType:'json'});
  }

  //searching the product using product name from the database
  searchProduct(pname:any):Observable<Product>
  {
    return this.http.get<Product>(`${this.url}/productSpring/search/${pname}`,{responseType:'json'});
  }

  //getting all the register data from the database
  getRegisteration():Observable<any>
  {
    return this.http.get(`${this.url2}/registerSpring/register`);
  }

  //remove register data from the registration table 
  removeRegistration(email:any)
  {
    return this.http.delete(`${this.url2}/registerSpring/register/${email}`);
  }

  //updating checkstatus by approving and dispproving to vendor login 
  updateRegister(email:string, checkStatus:string)
  {
    const params = new HttpParams().set('email',email).set('checkStatus',checkStatus);
    return this.http.put(`${this.url2}/registerSpring/register`,params);
  }

  //mailing when approving and disapproving customer
  mailResponse(email:string,checkStatus:any)
  {
    const params = new HttpParams().set('email',email).set('oper',checkStatus);
    return this.http.post(`${this.url3}/emailSpring/approving`,params);

  }

  //Accepting product by super admin
  acceptingProduct(pname:any,category:any,status:any,msg:any)
  {
    const params = new HttpParams().set("pname",pname).set("category",category).set("status",status).set("msg",msg);
    return this.http.put(`${this.url}/productSpring/approveProduct`,params);
  }

  //Getting all the product both accepted and disaccept
  getAllProduct()
  {
    return this.http.get(`${this.url}/productSpring/vendorProduct`,{responseType:'json'});
  }


}
