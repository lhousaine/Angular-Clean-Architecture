import { Component, OnInit } from '@angular/core';
import {UserUtil} from '../../Core/Utils/user.util';
import {RegisterUsecase} from '../../Core/Usecases/userUsercases/register.usecase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private userUtil:UserUtil,private registerUsecase:RegisterUsecase,private router:Router) {

  }

  ngOnInit() {

  }

  onRegister(value) {
    let data;
    data=this.userUtil.buildUserRegisterBody(value);
    this.registerUsecase.execute(data).subscribe(result=>{
      console.log(result);
    },err => {
      console.log(err);
    })
  }
}
