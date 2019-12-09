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

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserWebRepository extends UserRepository {
   userMapper = new UserWebRepositoryMapper();
   shopMapper = new ShopWebRepositoryMapper();
   API_USERS_URL="http://localhost:8085/users";
   API_LOGIN_URL="http://localhost:8085/login";
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
      httpsOptions)
      .pipe(map(this.userMapper.mapFrom));
  }

  dislikeNewShop(email:string,shopName:string): Observable<ShopModel>{
    return this.http.post<ShopWebEntity>(
      this.API_USERS_URL+'/dislike-shop',
      {"email":email, "shopName":shopName},
       httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }

  removeLikedShop(email:string,shopName:string): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(
      this.API_USERS_URL+'/preferred-shops/remove',
      {"email":email, "shopName":shopName},
         httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }

  likeNewShop(email:string,shopName:string): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(
      this.API_USERS_URL+'/like-shop',
      {"email":email, "shopName":shopName},
      httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }
}
