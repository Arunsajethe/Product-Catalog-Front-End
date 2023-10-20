import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private route:Router, public login:LoginserviceService)
  {

  }

  navigateHome()
  {
   console.log("hello")
   this.route.navigateByUrl("/**");

  }

}
