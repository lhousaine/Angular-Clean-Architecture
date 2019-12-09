import {Observable} from 'rxjs';
import {ShopModel} from '../Domain/Shop.model';
import {CoordinatesModel} from '../Domain/Coordinates.model';

export abstract class ShopRepository {
  abstract getShopById(id: number): Observable<ShopModel>;
  abstract getAllShops(): Observable<ShopModel>;
  abstract  getShopsNearbyToCoordinates(coordinates: CoordinatesModel): Observable<ShopModel>;
  abstract getPreferredShopsToUser(email:string): Observable<ShopModel>;
}
