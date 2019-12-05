import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrefferedShopsComponent } from './preffered-shops/preffered-shops.component';
import { ShopCardListComponent } from './shop-card-list/shop-card-list.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import {AngularMaterialModule} from './angular-material.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PrefferedShopsComponent, ShopCardListComponent, NearbyShopsComponent],
  imports: [
    AngularMaterialModule,
    CommonModule
  ],
  exports: [
    AngularMaterialModule
  ]
})
export class PresentationModule { }
