import { Component, OnInit } from '@angular/core';
import {LoginUsecase} from '../../Core/Usecases/userUsercases/login.usecase';
import {UserModel} from '../../Core/Domain/User.model';
import {AuthenticationUtil} from '../../Core/Utils/authentication.util';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {map} from 'rxjs/operators';
import {GetUserByEmailUsecase} from '../../Core/Usecases/userUsercases/get-user-by-email.usecase';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser:UserModel;
  constructor(private authUtil:AuthenticationUtil
              ,private router:Router) {
  }

  ngOnInit() {

  }

  onLogin(data){
    this.authUtil.login(data);
    console.log(data);
     this.router.navigateByUrl("/");
  }
}
