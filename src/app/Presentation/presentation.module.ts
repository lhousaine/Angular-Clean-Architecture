import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrefferedShopsComponent } from './preffered-shops/preffered-shops.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import {AngularMaterialModule} from './angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import { ShopItemComponent } from './shop-item/shop-item.component';


@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    PrefferedShopsComponent,
    NearbyShopsComponent,
    LayoutComponent,
    ShopItemComponent],
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    LayoutComponent
  ]
})
export class PresentationModule { }
