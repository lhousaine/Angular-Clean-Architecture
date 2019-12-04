import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PresentationModule} from './Presentation/presentation.module';
import {CoreModule} from './Core/core.module';
import {DataModule} from './Data/data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DataModule,
    CoreModule,
    PresentationModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
