import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin-service/admin.service';
import { Register } from 'src/app/user/Register';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent {

  myadmin:Register[]=[new Register('ABC','XYZ','abc@gmail.com','male','16 abc Chennai',20,'9845120055','abcdgheee'),
                      new Register('GHI','QRS','ghi@gmail.com','female','3 xyz Madurai',20,'9941120055','acdcdgheee')];

  myRegisters:any;
  hasdisplay:boolean= false;

  constructor(private service: AdminService)
  {
    this.displayRegister();
    this.hasdisplay=true;
  }

  displayRegister()
  {
    return this.service.getRegisteration().subscribe(e => {
      console.log(e);
      this.myRegisters=e;
      
    });

  }

  dataSubmitted(email:any,oper:any)
  {
    console.log(email);
    console.log(oper);

    if(oper=='Remove')
    {
      this.service.removeRegistration(email).subscribe();
    }
    else
    {
      this.service.updateRegister(email,oper).subscribe();
    }

  }

}
