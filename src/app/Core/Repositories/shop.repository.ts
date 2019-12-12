import {Observable} from 'rxjs';
import {ShopModel} from '../Domain/Shop.model';
import {UserModel} from '../Domain/User.model';

export abstract class ShopRepository {
  abstract getShopById(id: number): Observable<ShopModel>;
  abstract getAllShops(): Observable<ShopModel>;
  abstract  getShopsNearbyToCoordinates(userModel:UserModel): Observable<ShopModel>;
  abstract getPreferredShopsToUser(email:string): Observable<ShopModel>;
}
