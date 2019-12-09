import { Component, OnInit } from '@angular/core';
import {UserUtil} from '../../Core/Utils/user.util';
import {RegisterUsecase} from '../../Core/Usecases/userUsercases/register.usecase';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserWebEntity} from '../../Data/Entities/User-web-entity';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  isSubmitted  =  false;
  constructor(private userUtil:UserUtil,
              private registerUsecase:RegisterUsecase,
              private router:Router,
              private formBuilder:FormBuilder) {

  }

  ngOnInit(){
     this.RegisterForm=this.formBuilder.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', Validators.required],
       address:this.formBuilder.group({
         zipCode:[''],
         addressLine:[''],
         city:['', Validators.required],
         country:['', Validators.required]
       }),
       coordinates:this.formBuilder.group({
         latitude:['', Validators.required],
         longitude:['', Validators.required]
       })
     });
    }
  onRegister() {
    this.isSubmitted=true;
    if(this.RegisterForm.invalid)
      return;
    console.log(this.RegisterForm.value);
    this.registerUsecase.execute(this.RegisterForm.value).subscribe(userData=>{
       console.log(userData);
       this.router.navigateByUrl('/login');
    },error => {
      console.log(error);
    });
  }
}
