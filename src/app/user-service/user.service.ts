import { Injectable } from '@angular/core';
import { Register } from '../user/Register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private url:string= 'http://localhost:9001';

  private url1:string='http://localhost:9006';

  addRegister(reg: Register)
  {
    return this.http.post(`${this.url}/register`,reg);
  }

  emailchecking(email:string)
  {
    console.log(email);
    return this.http.get(`${this.url}/register/${email}`);
  }

  otpGenerating(email:string):Observable<any>
  {
    return this.http.post(`${this.url1}/sendOtp`,email);
  }

}
