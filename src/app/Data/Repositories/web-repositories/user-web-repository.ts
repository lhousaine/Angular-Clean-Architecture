import {UserRepository} from '../../../Core/Repositories/user.repository';
import {UserModel} from '../../../Core/Domain/User.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserWebRepositoryMapper} from '../../repositories-mappers/user-web-repository-mapper';
import {Injectable} from '@angular/core';
import {UserWebEntity} from '../../Entities/User-web-entity';
import {map} from 'rxjs/operators';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {ShopWebEntity} from '../../Entities/Shop-web-entity';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class UserWebRepository extends UserRepository {
   userMapper = new UserWebRepositoryMapper();
   shopMapper = new ShopWebRepositoryMapper();
   API_USERS_URL="http://localhost:8080/users";
  API_LOGIN_URL="http://localhost:8080/login";
  constructor(private http: HttpClient) {
    super();
  }

  loginUser(data){
    return this.http.post(this.API_LOGIN_URL, data,{observe:'response'});
  }

  registerUser(user:Object): Observable<UserModel> {
    return this.http.post<UserWebEntity>(this.API_USERS_URL+'/register', {user})
      .pipe(map(this.userMapper.mapFrom));
  }

  dislikeNewShop(idUser: number, idShop:number): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(this.API_USERS_URL+'/dislike-shop', {"idUser":idUser, "idShop":idShop})
      .pipe(map(this.shopMapper.mapFrom));
  }

  removeLikedShop(idUser: number,  idShop:number): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(this.API_USERS_URL+'/preferred-shops/remove', {"idUser":idUser, "idShop":idShop})
      .pipe(map(this.shopMapper.mapFrom));
  }

  likeNewShop(idUser: number,  idShop:number): Observable<ShopModel> {
    return this.http.post<ShopWebEntity>(this.API_USERS_URL+'/like-shop', {"idUser":idUser, "idShop":idShop})
      .pipe(map(this.shopMapper.mapFrom));
  }
}
