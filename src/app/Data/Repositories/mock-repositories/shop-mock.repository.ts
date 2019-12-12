import { Injectable } from '@angular/core';
import {ShopRepository} from '../../../Core/Repositories/shop.repository';
import {from, Observable} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {CoordinatesModel} from '../../../Core/Domain/Coordinates.model';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';

import {filter, map} from 'rxjs/operators';
import {ShopWebEntity} from '../../Entities/Shop-web-entity';
import {UserWebEntity} from '../../Entities/User-web-entity';
import {SHOPS, USERS} from './fixturesData';
import {UserModel} from '../../../Core/Domain/User.model';

@Injectable({
  providedIn: 'root'
})
export class ShopMockRepository extends ShopRepository{
   private shopMapper=new ShopWebRepositoryMapper();
   private shops=SHOPS;
   private users=USERS;
  constructor(){
    super();
  }

  getAllShops(): Observable<ShopModel> {
    return from(this.shops)
      .pipe(map(this.shopMapper.mapFrom));
  }

  getPreferredShopsToUser(email:string): Observable<ShopModel> {
    let user:UserWebEntity=null;
    from(this.users).pipe(
      filter((user:UserWebEntity) => user.email === email))
      .subscribe(data=>{
         user=data;
    });
    return from(user.likedShops).pipe(map(this.shopMapper.mapFrom));
  }

  getShopById(id: number): Observable<ShopModel> {
    return from(this.shops)
      .pipe(filter((shop: ShopWebEntity) => shop.id === id))
      .pipe(map(this.shopMapper.mapFrom));
  }

  getShopsNearbyToCoordinates(userModel:UserModel): Observable<ShopModel> {
    return from(this.shops)
      .pipe(filter((shop: ShopWebEntity) => shop.coordinates === userModel.coordinates))
      .pipe(map(this.shopMapper.mapFrom));
  }

}
