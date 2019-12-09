import {ShopWebEntity} from './Shop-web-entity';
import {AddressWebEntity} from './Address-web-entity';
import {CoordinatesWebEntity} from './Coordinates-web-entity';

export interface UserWebEntity {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  coordinates: CoordinatesWebEntity;
  address: AddressWebEntity;
  likedShops?: Array<ShopWebEntity>;
  dislikedShops?: Array<ShopWebEntity>;
}
