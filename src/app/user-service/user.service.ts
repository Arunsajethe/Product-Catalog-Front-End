import { Injectable } from '@angular/core';
import { Register } from '../user/Register';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../admin/Product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //link of Register service of spring boot
  private url:string= 'http://localhost:1005/registerSpring';

  //link of Product COmponent of spring boot
  private url1:string="http://localhost:1002/productSpring"

  //link of email sending of springboost
  private url2:string='http://localhost:1003/emailSpring';

  //adding vendor into the database using spring boot
  addRegister(reg: Register)
  {
    return this.http.post(`${this.url}/register`,reg);
  }

  //checking whether email is unique using spring boot
  emailchecking(email:string)
  {
    console.log(email);
    return this.http.get(`${this.url}/register/${email}`);
  }

  //sending the otp to respective email id
  otpGenerating(email:string):Observable<any>
  {
    return this.http.post(`${this.url2}/sendOtp`,email);
  }

  //changing password in the database using database
  changePassword(email:any,password:any)
  {
    const params = new HttpParams().set('email',email).set('password',password);
    return this.http.put(`${this.url}/changepassword`,params);
  }

  //get wireline product from the spring boot
  getAllWireline()
  {
    return this.http.get<Product>(`${this.url1}/getWireline`, {responseType:'json'});
  }

  //get wireless product from the spring boost
  getAllWireless()
  {
    return this.http.get<Product>(`${this.url1}/getWireless`,{responseType:'json'});
  }

  //Get all the product from the database
  displayProducts()
  {
    return this.http.get(`${this.url1}/product/display`);
  }

}
