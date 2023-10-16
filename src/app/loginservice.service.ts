import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';
import { login } from './user/login';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  public log:boolean=false;

  private url:string="http://localhost:9005";

  constructor(private session: SessionStorageService, private router:Router, private http:HttpClient) { }

  loginValidity(user:any,pwd:any)
  {
    if(user=='superadmin' && pwd == 'tatabye')
    {
      this.log=true;
      this.session.setItem('examplekey','examplevalue');
      return true;
    }
    else{
      return false;
    }
  }

  islogined(): boolean
  {
    return !!this.getCurrentUser();
  }

  getCurrentUser(): any{
    return this.session.getItem('examplekey');
  }

  logout():any{
    this.session.removeItem('examplekey');
    this.router.navigateByUrl("**");

  }


  
}
