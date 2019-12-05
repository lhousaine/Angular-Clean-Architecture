import {UserRepository} from '../../Core/Repositories/user.repository';
import {UserModel} from '../../Core/Domain/User.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserWebRepositoryMapper} from '../repositories-mappers/user-web-repository-mapper';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWebRepository extends UserRepository {
  // const userMapper = new UserWebRepositoryMapper();
  constructor(http: HttpClient) {
    super();
  }

  dislikeNewShop(idUser: number, shopName: string): Observable<UserModel> {
    return undefined;
  }

  dremoveLikedShop(idUser: number, shopName: string): Observable<UserModel> {
    return undefined;
  }

  likeNewShop(idUser: number, shopName: string): Observable<UserModel> {
    return undefined;
  }

  loginUser(email: string, password: string): Observable<UserModel> {
    return undefined;
  }

  registerUser(user: UserModel, password: string): Observable<UserModel> {
    return undefined;
  }
}
