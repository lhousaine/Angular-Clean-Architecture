import {Mapper} from '../../Core/Base/mapper';
import {UserWebEntity} from '../Entities/User-web-entity';
import {UserModel} from '../../Core/Domain/User.model';
import {ShopWebRepositoryMapper} from './shop-web-repository-mapper';
import {RoleWebRepositoryMapper} from './role-web-repository-mapper';
import {ShopWebEntity} from '../Entities/Shop-web-entity';
import {RoleWebEntity} from '../Entities/Role-web-entity';
import {ShopModel} from '../../Core/Domain/Shop.model';
import {RoleModel} from '../../Core/Domain/Role.model';

export class UserWebRepositoryMapper extends Mapper<UserWebEntity, UserModel> {
    shopMapper=new ShopWebRepositoryMapper();
    roleMapper=new RoleWebRepositoryMapper();
  mapFrom(param: UserWebEntity): UserModel {
    var likedShops:ShopModel[]= [];
    var dislikedShops:ShopModel[]=[];
    var roles:RoleModel[]=[];
    param.likedShops.forEach(value=>{
      likedShops.push(this.shopMapper.mapFrom(value));
    });

    param.dislikedShops.forEach(value => {
      dislikedShops.push(this.shopMapper.mapFrom(value));
    });

    param.roles.forEach(value=> {
      roles.push(this.roleMapper.mapFrom(value));
    });
    return {
    email: param.email,
    firstName: param.firstName,
    lastName: param.lastName,
    coordinates: param.coordinates,
    address: param.address,
    likedShops: likedShops,
    dislikedShops: dislikedShops,
    roles: roles
    };
  }

  mapTo(param: UserModel): UserWebEntity {
    var likedShops:ShopWebEntity[]= [];
    var dislikedShops:ShopWebEntity[]=[];
    var roles:RoleWebEntity[]=[];
    param.likedShops.forEach(value=>{
      likedShops.push(this.shopMapper.mapTo(value));
    });

    param.dislikedShops.forEach(value => {
      dislikedShops.push(this.shopMapper.mapTo(value))
    });

    param.roles.forEach(value=> {
      roles.push(this.roleMapper.mapTo(value));
    });
    return {
      id: 0,
      email: param.email,
      firstName: param.firstName,
      lastName: param.lastName,
      coordinates: param.coordinates,
      address: param.address,
      likedShops: likedShops,
      dislikedShops: dislikedShops,
      roles: roles
    };
  }

}
