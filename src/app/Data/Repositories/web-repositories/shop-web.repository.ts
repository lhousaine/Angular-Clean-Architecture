import {ShopRepository} from '../../../Core/Repositories/shop.repository';
import {Observable} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {CoordinatesModel} from '../../../Core/Domain/Coordinates.model';
import {filter, flatMap, map} from 'rxjs/operators';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ShopWebEntity } from '../../Entities/Shop-web-entity';
import {Injectable} from '@angular/core';
import {AuthenticationUtil} from '../../../Core/Utils/authentication.util';
import {UserModel} from '../../../Core/Domain/User.model';

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShopWebRepository extends ShopRepository {
  shopMapper = new ShopWebRepositoryMapper();
  API_SHOPS_URL="http://localhost:8085/shops";
  API_USERS_URL="http://localhost:8085/users";
  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json'
    })
  };
  constructor(private http: HttpClient) {
    super();
  }

  getAllShops(): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity[]>(
        this.API_SHOPS_URL,
        this.httpsOptions)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopById(id: number): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity>(
        this.API_SHOPS_URL+'${id}',
        this.httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }

  getPreferredShopsToUser(email:string): Observable<ShopModel>  {
    return  this.http
      .post<ShopWebEntity[]>(
        this.API_USERS_URL+'/preferred-shops',
        {"email":email},
        this.httpsOptions)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopsNearbyToCoordinates(userModel:UserModel): Observable<ShopModel> {
    console.log(userModel.coordinates);
    return this.http.post<ShopWebEntity[]>(
      this.API_SHOPS_URL+'/nearbyshops',
      userModel.coordinates,
      this.httpsOptions)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom))
      .pipe(filter((shop: ShopModel) => !userModel.dislikedShops.includes(shop)));
  }
}
