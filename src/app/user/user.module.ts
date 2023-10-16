import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { WirelineComponent } from './wireline/wireline.component';
import { WirelessComponent } from './wireless/wireless.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyoffersComponent,
    WirelineComponent,
    WirelessComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyoffersComponent,
    WirelessComponent,
    WirelineComponent,
    ForgotPasswordComponent
  ]
})
export class UserModule { }
