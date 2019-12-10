import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserModel} from '../Domain/User.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {LoginUsecase} from '../Usecases/userUsercases/login.usecase';
import {GetUserByEmailUsecase} from '../Usecases/userUsercases/get-user-by-email.usecase';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationUtil {
  private jwt: string;
  private username: string;
  private roles: Array<string>;
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private loginUser:LoginUsecase,
              private getUserByEmail:GetUserByEmailUsecase
              ) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(data) {
    this.loginUser.execute(data).subscribe(resp=>{
      let jwt=resp.headers.get('Authorization');
      console.log(jwt);
      this.saveToken(jwt);
      console.log(this.username);
      this.getUserByEmail.execute(this.username).subscribe(userData=> {

        this.saveUser(userData);
        this.currentUserSubject.next(userData);
      },error => {
        console.log(error);
      });
    });
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  public get getJwt() {
    return this.jwt
  }

  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }

  saveUser(user:UserModel) {
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  parseJWT() {
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.sub;
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

  createRequestHeader(){
    return  {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization':this.getJwt
      })
    };
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.initParams();
  }

  initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
}
