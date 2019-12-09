import {Mapper} from '../../Core/Base/mapper';
import {UserWebEntity} from '../Entities/User-web-entity';
import {UserModel} from '../../Core/Domain/User.model';
import {ShopWebRepositoryMapper} from './shop-web-repository-mapper';
import {ShopWebEntity} from '../Entities/Shop-web-entity';
import {ShopModel} from '../../Core/Domain/Shop.model';

export class UserWebRepositoryMapper extends Mapper<UserWebEntity, UserModel> {
    shopMapper=new ShopWebRepositoryMapper();
  mapFrom(param: UserWebEntity): UserModel {
    var likedShops:ShopModel[]= [];
    var dislikedShops:ShopModel[]=[];
    if(param.likedShops)
    param.likedShops.forEach(value=>{
      likedShops.push(this.shopMapper.mapFrom(value));
    });
    if(param.dislikedShops) {
      param.dislikedShops.forEach(value => {
        dislikedShops.push(this.shopMapper.mapFrom(value));
      });
    }
    return {
    email: param.email,
    firstName: param.firstName,
    lastName: param.lastName,
    coordinates: param.coordinates,
    address: param.address,
    likedShops: likedShops,
    dislikedShops: dislikedShops,
    };
  }

  mapTo(param: UserModel): UserWebEntity {
    var likedShops:ShopWebEntity[]= [];
    var dislikedShops:ShopWebEntity[]=[];
    if(param.likedShops)
    param.likedShops.forEach(value=>{
      likedShops.push(this.shopMapper.mapTo(value));
    });

    if (param.dislikedShops)
    param.dislikedShops.forEach(value => {
      dislikedShops.push(this.shopMapper.mapTo(value))
    });
    return {
      id: 0,
      email: param.email,
      firstName: param.firstName,
      lastName: param.lastName,
      coordinates: param.coordinates,
      address: param.address,
      likedShops: likedShops,
      dislikedShops: dislikedShops
    };
  }

}
