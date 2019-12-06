import { Component, OnInit } from '@angular/core';
import {LoginUsecase} from '../../Core/Usecases/userUsercases/login.usecase';
import {UserModel} from '../../Core/Domain/User.model';
import {AuthenticationUtil} from '../../Core/Utils/authentication.util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserModel;
  constructor(private loginUser:LoginUsecase,private authUtil:AuthenticationUtil,private router:Router) { }

  ngOnInit() {

  }

  onLogin(value){
    console.log(value);
    this.loginUser.execute(value)
      .subscribe(response=>{
        let jwt=response.headers.get('Authorization');
        console.log(jwt);
        this.authUtil.saveToken(jwt);
        this.router.navigateByUrl("/");
      },err => {
        console.log(err);
      })
  }
}
