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
import {UserMockRepository} from './Data/Repositories/mock-repositories/user-mock.repository';
import {ShopMockRepository} from './Data/Repositories/mock-repositories/shop-mock.repository';

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
    {provide: ShopRepository,useClass:ShopWebRepository}
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
