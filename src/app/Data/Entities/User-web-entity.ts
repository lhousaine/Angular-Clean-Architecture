import {RoleWebEntity} from './Role-web-entity';
import {ShopWebEntity} from './Shop-web-entity';
import {AddressWebEntity} from './Address-web-entity';

export interface UserWebEntity {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  coordinates: string;
  address: AddressWebEntity;
  likedShops?: Array<ShopWebEntity>;
  dislikedShops?: Array<ShopWebEntity>;
  roles: Array<RoleWebEntity>;
}
