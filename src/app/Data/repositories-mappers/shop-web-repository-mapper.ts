import {Mapper} from '../../Core/Base/mapper';
import {ShopWebEntity} from '../Entities/Shop-web-entity';
import {ShopModel} from '../../Core/Domain/Shop.model';

export class ShopWebRepositoryMapper extends Mapper<ShopWebEntity, ShopModel, string> {
  mapFrom(param: ShopWebEntity): ShopModel {
    return {
      name: param.name,
      description: param.description,
      logo: param.logo,
      coordinates: param.coordinates,
      address: param.address
    };
  }

  mapTo(param: ShopModel, idShop): ShopWebEntity {
    return {
    id:idShop,
    name: param.name,
    description: param.description,
    logo: param.logo,
    coordinates: param.coordinates,
    address: param.address
    };
  }
}
