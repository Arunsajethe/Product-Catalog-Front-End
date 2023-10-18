import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SearchComponent } from './search/search.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CreateSubproductComponent } from './create-subproduct/create-subproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsPipe } from './view-products/products.pipe';
import { ProductControlComponent } from './product-control/product-control.component'

@NgModule({
  declarations: [
    HomepageComponent,
    CreateProductComponent,
    ViewProductsComponent,
    SearchComponent,
    ViewVendorComponent,
    CreateSubproductComponent,
    EditProductComponent,
    ProductsPipe,
    ProductControlComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HomepageComponent,
    CreateProductComponent,
    CreateSubproductComponent,
    ViewProductsComponent,
    SearchComponent,
    ViewVendorComponent,
    EditProductComponent,
    ProductControlComponent
  ]
})
export class AdminModule { }
