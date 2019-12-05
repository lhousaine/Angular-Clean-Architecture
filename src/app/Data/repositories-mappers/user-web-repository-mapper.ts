import {Mapper} from '../../Core/Base/mapper';
import {UserWebEntity} from '../Entities/User-web-entity';
import {UserModel} from '../../Core/Domain/User.model';
import {AddressModel} from '../../Core/Domain/Address.model';
import {ShopModel} from '../../Core/Domain/Shop.model';
import {RoleModel} from '../../Core/Domain/Role.model';

export class UserWebRepositoryMapper extends Mapper<UserWebEntity, UserModel, number> {
  mapFrom(param: UserWebEntity): UserModel {
    return {
    email: param.email,
    firstName: param.firstName,
    lastName: param.lastName,
    coordinates: param.coordinates,
    address: param.address,
    likedShops: param.likedShops,
    dislikedShops: param.dislikedShops,
    role: param.role
    };
  }

  mapTo(param: UserModel, idUser: number): UserWebEntity {
    return {
      id: idUser,
      email: param.email,
      firstName: param.firstName,
      lastName: param.lastName,
      coordinates: param.coordinates,
      address: param.address,
      likedShops: param.likedShops,
      dislikedShops: param.dislikedShops,
      role: param.role
    };
  }

}
