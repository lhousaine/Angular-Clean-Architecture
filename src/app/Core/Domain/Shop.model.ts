import {CoordinatesModel} from './Coordinates.model';
import {AddressModel} from './Address.model';

export interface ShopModel {
  name: string;
  description: string;
  logo: string;
  coordinates: CoordinatesModel;
  address: AddressModel;
}
