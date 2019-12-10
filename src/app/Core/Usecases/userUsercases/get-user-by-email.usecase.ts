import {UseCase} from '../../Base/usecase';
import {UserModel} from '../../Domain/User.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../../Repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class GetUserByEmailUsecase implements UseCase<string,UserModel>{
  constructor(private userRepository:UserRepository){

  }
  execute(params: string): Observable<UserModel> {
    return this.userRepository.getUserEmail(params);
  }

}
