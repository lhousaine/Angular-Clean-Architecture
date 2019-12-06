import {ShopRepository} from '../../../Core/Repositories/shop.repository';
import {Observable} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {CoordinatesModel} from '../../../Core/Domain/Coordinates.model';
import {flatMap, map} from 'rxjs/operators';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';
import { HttpClient } from '@angular/common/http';
import { ShopWebEntity } from '../../Entities/Shop-web-entity';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopWebRepository extends ShopRepository {
  shopMapper = new ShopWebRepositoryMapper();
  API_SHOPS_URL="http://localhost:8080/shops";

  constructor(private http: HttpClient) {
    super();
  }

  getAllShops(): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity[]>(this.API_SHOPS_URL)
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getPreferredShopsToUser(idUser: number): Observable<ShopModel>  {
    return  this.http
      .get<ShopWebEntity[]>(this.API_SHOPS_URL+'/preferred-shops/${idUser}')
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopById(id: number): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity>(this.API_SHOPS_URL+'${id}')
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopsNearbyToCoordinates(coordinates: CoordinatesModel): Observable<ShopModel> {
    return this.http.post<ShopWebEntity[]>(this.API_SHOPS_URL+'/nearby-shops', {coordinates})
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }
}
