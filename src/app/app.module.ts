import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PresentationModule} from './Presentation/presentation.module';
import {CoreModule} from './Core/core.module';
import {DataModule} from './Data/data.module';
import {AppRoutingModule} from './app-routing.module';
import {UserRepository} from './Core/Repositories/user.repository';
import {UserWebRepository} from './Data/Repositories/web-repositories/user-web-repository';
import {ShopRepository} from './Core/Repositories/shop.repository';
import {ShopWebRepository} from './Data/Repositories/web-repositories/shop-web.repository';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptorUtil} from './Core/Utils/JwtInterceptor.util';
import {ErrorInterceptorUtil} from './Core/Utils/error.interceptor.util';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    DataModule,
    CoreModule,
    PresentationModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: UserRepository,useClass:UserWebRepository},
    {provide: ShopRepository,useClass:ShopWebRepository},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorUtil, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorUtil, multi: true },
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
