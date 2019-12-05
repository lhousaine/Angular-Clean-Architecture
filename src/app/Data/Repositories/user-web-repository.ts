import {UserRepository} from '../../Core/Repositories/user.repository';
import {UserModel} from '../../Core/Domain/User.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserWebRepositoryMapper} from '../repositories-mappers/user-web-repository-mapper';
import {Injectable} from '@angular/core';
import {UserWebEntity} from '../Entities/User-web-entity';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserWebRepository extends UserRepository {
   userMapper = new UserWebRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }

  dislikeNewShop(idUser: number, shopName: string): Observable<UserModel> {
    return this.http.post<UserWebEntity>('/login', {"idUser":idUser, "shopName":shopName})
      .pipe(map(this.userMapper.mapFrom));
  }

  dremoveLikedShop(idUser: number, shopName: string): Observable<UserModel> {
    return this.http.post<UserWebEntity>('/login', {"idUser":idUser, "shopName":shopName})
      .pipe(map(this.userMapper.mapFrom));
  }

  likeNewShop(idUser: number, shopName: string): Observable<UserModel> {
    return this.http.post<UserWebEntity>('/login', {"idUser":idUser, "shopName":shopName})
      .pipe(map(this.userMapper.mapFrom));
  }

  loginUser(email: string, password: string): Observable<UserModel> {
    return this.http.post<UserWebEntity>('/login', {email, password})
      .pipe(map(this.userMapper.mapFrom));
  }

  registerUser(user: UserModel, password: string): Observable<UserModel> {
    return this.http.post<UserWebEntity>('/login', {user,password})
      .pipe(map(this.userMapper.mapFrom));
  }
}
