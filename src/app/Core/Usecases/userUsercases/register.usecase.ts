import {UseCase} from '../../Base/usecase';
import {UserModel} from '../../Domain/User.model';
import {Observable} from 'rxjs';
import {UserRepository} from '../../Repositories/user.repository';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegisterUsecase implements UseCase<any,UserModel>{
  constructor(private userRepository:UserRepository){

  }

  execute(params: any): Observable<UserModel> {
    return this.userRepository.registerUser(params);
  }

}
