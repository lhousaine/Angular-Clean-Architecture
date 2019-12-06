import {UseCase} from '../../Base/usecase';
import {UserModel} from '../../Domain/User.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserRepository} from '../../Repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class LoginUsecase implements UseCase<Object,UserModel>{

  constructor(private userRepository:UserRepository){

  }
  execute(params:Object){
    return this.userRepository.loginUser(params);
  }

}
