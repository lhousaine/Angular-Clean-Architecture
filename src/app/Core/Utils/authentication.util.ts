import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationUtil {
  jwt:string;
  username:string;
  roles:Array<string>;

  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }


  parseJWT() {
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
  }
  isUser(){
    return this.roles.indexOf('USER')>=0;
  }
  isAuthenticated(){
    return this.roles && (this.isUser());
  }

  loadToken() {
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  logOut() {
    localStorage.removeItem("token");
    this.initParams();
  }

  initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
}
