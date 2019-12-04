import {Observable} from 'rxjs';
import {ShopModel} from '../Domain/Shop.model';
import {CoordinatesModel} from '../Domain/Coordinates.model';

export abstract class ShopRepository {
  abstract getShopByName(id: number): Observable<ShopModel>;
  abstract getAllShops(): Observable<ShopModel>;
  abstract  getShopsNearbyToCoordinates(coordinates: CoordinatesModel): Observable<ShopModel>;
  abstract getPrefferedShopsToUser(idUser: number);
}
