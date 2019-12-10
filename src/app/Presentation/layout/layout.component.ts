import { Component, OnInit } from '@angular/core';
import {AuthenticationUtil} from '../../Core/Utils/authentication.util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title = 'shop-front-end';
  constructor(private router:Router,private authUtil:AuthenticationUtil){

  }
  ngOnInit(): void {
    this.authUtil.loadToken();
  }

  isUser(){
    return this.authUtil.isUser();
  }
  isAuthenticated(){
    return this.authUtil.isAuthenticated();
  }

  logOut() {
    this.authUtil.logOut();
    this.router.navigate(['/login']);
  }
}
