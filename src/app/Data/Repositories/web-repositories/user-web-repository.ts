import {UserRepository} from '../../../Core/Repositories/user.repository';
import {UserModel} from '../../../Core/Domain/User.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserWebRepositoryMapper} from '../../repositories-mappers/user-web-repository-mapper';
import {Injectable} from '@angular/core';
import {UserWebEntity} from '../../Entities/User-web-entity';
import {map} from 'rxjs/operators';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {ShopWebEntity} from '../../Entities/Shop-web-entity';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';
import {AuthenticationUtil} from '../../../Core/Utils/authentication.util';

@Injectable({
  providedIn: 'root'
})
export class UserWebRepository extends UserRepository {
   userMapper = new UserWebRepositoryMapper();
   shopMapper = new ShopWebRepositoryMapper();
   API_USERS_URL="http://localhost:8085/users";
   API_LOGIN_URL="http://localhost:8085/login";
  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json'
    })
  };

  constructor(private http: HttpClient) {
    super();
  }

  loginUser(data){
    return this.http.post<any>(
         this.API_LOGIN_URL,data,
      {observe:'response'});
  }

  registerUser(user:any): Observable<UserModel> {
    return this.http.post<UserWebEntity>(
      this.API_USERS_URL+'/register',
       user,
      this.httpsOptions)
      .pipe(map(this.userMapper.mapFrom));
  }

  getUserEmail(email: string): Observable<UserModel> {
    return this.http.post<UserWebEntity>(
      this.API_USERS_URL+'/user',
      {"email":email},
      this.httpsOptions)
      .pipe(map(this.userMapper.mapFrom));
  }

  dislikeNewShop(datas): Observable<ShopModel>{
    return this.http.post<ShopWebEntity>(
      this.API_USERS_URL+'/dislike-shop',
      datas,
       this.httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }

  removeLikedShop(datas): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(
      this.API_USERS_URL+'/preferred-shops/remove',
      datas,
         this.httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }

  likeNewShop(datas): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(
      this.API_USERS_URL+'/like-shop',
      datas,
      this.httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }
}
