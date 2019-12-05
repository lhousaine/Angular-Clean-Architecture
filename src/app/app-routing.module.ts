import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './Presentation/register/register.component';
import {LoginComponent} from './Presentation/login/login.component';
import {NearbyShopsComponent} from './Presentation/nearby-shops/nearby-shops.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'nearby-shops' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nearby-shops', component: NearbyShopsComponent },
  { path: 'preferred-shops', component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
           CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
