import {ShopRepository} from '../../Core/Repositories/shop.repository';
import {Observable} from 'rxjs';
import {ShopModel} from '../../Core/Domain/Shop.model';
import {CoordinatesModel} from '../../Core/Domain/Coordinates.model';
import {flatMap, map} from 'rxjs/operators';
import {ShopWebRepositoryMapper} from '../repositories-mappers/shop-web-repository-mapper';
import { HttpClient } from '@angular/common/http';
import { ShopWebEntity } from '../Entities/Shop-web-entity';

export class ShopWebRepository extends ShopRepository {
  shopMapper = new ShopWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getAllShops(): Observable<ShopModel> {
    return this.http
      .get<ShopWebEntity[]>('http://localhost:8080/shops')
      .pipe(flatMap((item) => item))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getPrefferedShopsToUser(idUser: number) {

  }

  getShopByName(id: number): Observable<ShopModel> {
    return undefined;
  }

  getShopsNearbyToCoordinates(coordinates: CoordinatesModel): Observable<ShopModel> {
    return undefined;
  }
}
