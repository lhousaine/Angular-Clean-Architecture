import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './Presentation/register/register.component';
import {LoginComponent} from './Presentation/login/login.component';
import {NearbyShopsComponent} from './Presentation/nearby-shops/nearby-shops.component';
import {PrefferedShopsComponent} from './Presentation/preffered-shops/preffered-shops.component';
import {LayoutComponent} from './Presentation/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'nearby-shops'},
      {path: 'nearby-shops', component: NearbyShopsComponent},
      {path: 'preferred-shops', component: PrefferedShopsComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
           CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
