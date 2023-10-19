import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';
import { login } from './user/login';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Register } from './user/Register';
import { interval, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  public log:boolean=false;
  private myLogin:any;

    //link of Register service of spring boot
  private url:string= 'http://localhost:1005/registerSpring';

  constructor(private session: SessionStorageService, private router:Router, private http:HttpClient) { }

  loginValidity(email:any,password:any)
  {
    if(email=='superadmin' && password == 'tatabye')
    {
      this.log=true;
      this.session.setItem('examplekey','examplevalue');
      this.session.setItem('superadmin','superadmin');
      this.session.setItem('admin',email);
      this.session.setItem('user',email);
      return true;
    }
    else{
      // const temp =this.http.get(`${this.url}/loginChecking/${email}/${password}`).subscribe(e => this.myLogin =e);
      const temp =this.http.get(`${this.url}/loginChecking/${email}/${password}`).subscribe(e =>{console.log(e);
        this.myLogin =e;
        timer(1000).subscribe(()=>{
          if(this.myLogin.length !== 0)
          {
            this.session.setItem('examplekey','examplevalue');
            this.session.setItem('admin',email);
            this.session.setItem('user',this.myLogin.firstname);
            
            return true;
          }
          else{
            return false;
          }
        })
      });

      console.log(this.myLogin)
      console.log(temp);

      return this.islogined();
    }
  }

  getUsername():any
  {
    return this.session.getItem('user');
  }

  getEmail():any{
    return this.session.getItem('admin');
  }

  islogined(): boolean
  {
    return !!this.getCurrentUser();
  }

  isSuperAdmin():boolean
  {
    return !!this.getSuperAdmin();
  }

  getCurrentUser(): any{
    return this.session.getItem('examplekey');
  }

  getSuperAdmin():any{
    return this.session.getItem('superadmin');
  }

  logout():any{
    this.session.removeItem('examplekey');
    this.router.navigateByUrl("**");

  }


  
}
