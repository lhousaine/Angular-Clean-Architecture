import {AddressModel} from './Address.model';
import {ShopModel} from './Shop.model';

export interface UserModel {
  email: string;
  firstName: string;
  lastName: string;
  coordinates: string;
  address: AddressModel;
  likedShops: Array<ShopModel>;
  dislikedShops: Array<ShopModel>;
}
