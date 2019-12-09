import {AddressModel} from './Address.model';
import {ShopModel} from './Shop.model';
import {CoordinatesModel} from './Coordinates.model';

export interface UserModel {
  email: string;
  firstName: string;
  lastName: string;
  coordinates: CoordinatesModel;
  address: AddressModel;
  likedShops: Array<ShopModel>;
  dislikedShops: Array<ShopModel>;
}
