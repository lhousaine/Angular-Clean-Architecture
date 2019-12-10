import {ShopRepository} from '../../../Core/Repositories/shop.repository';
import {Observable} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {CoordinatesModel} from '../../../Core/Domain/Coordinates.model';
import {flatMap, map} from 'rxjs/operators';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ShopWebEntity } from '../../Entities/Shop-web-entity';
import {Injectable} from '@angular/core';
import {AuthenticationUtil} from '../../../Core/Utils/authentication.util';

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
  API_SHOPS_URL="http://localhost:8080/shops";
  API_USERS_URL="http://localhost:8080/users";
  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json'
    })
  };
  constructor(private http: HttpClient,private authUtil:AuthenticationUtil) {
    super();
  }

  getAllShops(): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity[]>(this.API_SHOPS_URL)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getPreferredShopsToUser(email:string): Observable<ShopModel>  {
    return  this.http
      .get<ShopWebEntity[]>(
        this.API_USERS_URL+'/preferred-shops/',
        httpsOptions)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopById(id: number): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity>(
        this.API_SHOPS_URL+'${id}',
        httpsOptions)
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopsNearbyToCoordinates(coordinates: CoordinatesModel): Observable<ShopModel> {
    return this.http.post<ShopWebEntity[]>(
      this.API_SHOPS_URL+'/nearby-shops',
      {coordinates},
        httpsOptions)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }
}
