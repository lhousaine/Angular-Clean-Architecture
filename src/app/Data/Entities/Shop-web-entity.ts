import {CoordinatesWebEntity} from './Coordinates-web-entity';
import {AddressWebEntity} from './Address-web-entity';

export interface ShopWebEntity {
  id: number;
  name: string;
  description: string;
  logo: string;
  coordinates: CoordinatesWebEntity;
  address: AddressWebEntity;
}
