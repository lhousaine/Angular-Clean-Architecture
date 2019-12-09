import {UseCase} from '../../Base/usecase';

import {Injectable} from '@angular/core';
import {UserRepository} from '../../Repositories/user.repository';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUsecase implements UseCase<any,any>{

  constructor(private userRepository:UserRepository){

  }

  execute(params:any):Observable<any>{
    return this.userRepository.loginUser(params);
  }

}
