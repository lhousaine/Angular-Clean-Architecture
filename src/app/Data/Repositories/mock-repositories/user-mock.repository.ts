import { Injectable } from '@angular/core';
import {UserRepository} from '../../../Core/Repositories/user.repository';
import {from, Observable, pipe} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {UserModel} from '../../../Core/Domain/User.model';
import {UserWebRepositoryMapper} from '../../repositories-mappers/user-web-repository-mapper';
import {SHOPS, USERS} from './fixturesData';
import {filter, map} from 'rxjs/operators';
import {UserWebEntity} from '../../Entities/User-web-entity';
import {ShopWebEntity} from '../../Entities/Shop-web-entity';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class UserMockRepository extends UserRepository{
  private userMapper=new UserWebRepositoryMapper();
  private shopMapper=new ShopWebRepositoryMapper();
  private users=USERS;
  private shops=SHOPS;

  constructor(){
    super();
  }

  loginUser(data):Observable<any> {
    return from(this.users)
      .pipe(filter((user:UserWebEntity) => user.email === data.email));
  }

  registerUser(user: any): Observable<UserModel> {
    this.users.push(user);
    return from(this.users)
      .pipe(filter((data:UserWebEntity) => data.email===data.email)).
      pipe(map(this.userMapper.mapFrom));
  }

  dislikeNewShop(email:string,shopName:string): Observable<ShopModel> {
    let shop:ShopWebEntity;
    let ObshopEnt=from(this.shops)
      .pipe(filter((shop: ShopWebEntity) => shop.name === shopName));
    ObshopEnt.subscribe(data=>{
      shop=data;
    });
    from(this.users)
      .pipe(filter((user:UserWebEntity) => user.email===email))
      .subscribe(data=>{
        data.dislikedShops.push(shop);
      });
    return ObshopEnt.pipe(map(this.shopMapper.mapFrom));
  }

  likeNewShop(email:string,shopName:string): Observable<ShopModel> {
    let shop:ShopWebEntity;
    let ObshopEnt=from(this.shops)
      .pipe(filter((shop: ShopWebEntity) => shop.name === shopName));
      ObshopEnt.subscribe(data=>{
        shop=data;
      });
    from(this.users)
      .pipe(filter((user:UserWebEntity) => user.email===email))
      .subscribe(data=>{
        data.likedShops.push(shop);
      });
    return ObshopEnt.pipe(map(this.shopMapper.mapFrom));
  }


  removeLikedShop(email:string,shopName:string): Observable<ShopModel> {
    from(this.users)
      .pipe(filter((user:UserWebEntity) => user.email===email))
      .subscribe(data=>{
        data.likedShops.filter(shop => shop.name !== shopName);
      });
    return from(this.shops)
      .pipe(filter((shop: ShopWebEntity) => shop.name === shopName))
       .pipe(map(this.shopMapper.mapFrom));
  }

  getUserEmail(email: string): Observable<UserModel> {
    return from(this.users)
      .pipe(filter((data:UserWebEntity) => data.email===data.email)).
      pipe(map(this.userMapper.mapFrom));
  }
}
