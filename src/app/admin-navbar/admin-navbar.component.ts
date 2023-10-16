import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  constructor(public service: LoginserviceService)
  {

  }

}
