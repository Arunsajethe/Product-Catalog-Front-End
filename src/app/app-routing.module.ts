import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { CreateSubproductComponent } from './admin/create-subproduct/create-subproduct.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { MyoffersComponent } from './user/myoffers/myoffers.component';
import { WirelineComponent } from './user/wireline/wireline.component';
import { WirelessComponent } from './user/wireless/wireless.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { SearchComponent } from './admin/search/search.component';
import { ViewVendorComponent } from './admin/view-vendor/view-vendor.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ProductControlComponent } from './admin/product-control/product-control.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"createsubproduct",
    component:CreateSubproductComponent
  },
  {
    path:"createproduct",
    component:CreateProductComponent
  },
  {
    path:"myoffers",
    component:MyoffersComponent
  },
  {
    path:"wireline",
    component:WirelineComponent
  },
  {
    path:"wireless",
    component:WirelessComponent
  },
  {
    path:"viewproducts",
    component:ViewProductsComponent
  },
  {
    path:"searchproducts",
    component:SearchComponent
  },
  {
    path:"viewvendor",
    component:ViewVendorComponent
  },
  {
    path:"forgotpassword",
    component:ForgotPasswordComponent
  },
  {
    path:"editproduct/:pname/:category",
    component:EditProductComponent
  },
  {
    path:"productcontrol",
    component:ProductControlComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
