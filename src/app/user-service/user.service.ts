import { Injectable } from '@angular/core';
import { Register } from '../user/Register';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //link of Register service of spring boot
  private url:string= 'http://localhost:9001';

  //link of Otp service of spring boot
  private url1:string='http://localhost:9006';

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
    return this.http.post(`${this.url1}/sendOtp`,email);
  }

  //changing password in the database using database
  changePassword(email:any,password:any)
  {
    const params = new HttpParams().set('email',email).set('password',password);
    return this.http.put(`${this.url}/changepassword`,params);
  }

}
