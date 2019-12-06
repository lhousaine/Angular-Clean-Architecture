import { Injectable } from '@angular/core';
import {ShopRepository} from '../../../Core/Repositories/shop.repository';
import {from, Observable} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {CoordinatesModel} from '../../../Core/Domain/Coordinates.model';
import {ShopWebRepositoryMapper} from '../../repositories-mappers/shop-web-repository-mapper';
import {CoordinatesWebEntity} from '../../Entities/Coordinates-web-entity';
import {AddressWebEntity} from '../../Entities/Address-web-entity';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopMockRepository extends ShopRepository{
   private shopMapper=new ShopWebRepositoryMapper();
   shops=[
     {
       id: 0,
       name: "shop_1",
       description: "shop 1 shop 1",
       logo: "https://imgbb/shop1.png",
       address: {
         zipCode:2,
         addressLine:"rue 10",
         city:"marrakech",
         country:"maroc"
       },
       coordinates: {
         latitude:20.3,
        longitude:30
       }
     },{
       id: 1,
       name: "shop_2",
       description: "shop 2 shop 2",
       logo: "https://imgbb/shop2.png",
       address: {
         zipCode:"125",
         addressLine:"rue 120",
         city:"marrakech",
         country:"maroc"
       },
       coordinates: {
         latitude:18,
         longitude:35
       }
     }
   ];
  constructor(){
    super();
  }

  getAllShops(): Observable<ShopModel> {
    return from(this.shops)
      .pipe(map(this.shopMapper.mapFrom));
  }

  getPreferredShopsToUser(idUser: number): Observable<ShopModel> {
    return undefined;
  }

  getShopById(id: number): Observable<ShopModel> {
    return undefined;
  }

  getShopsNearbyToCoordinates(coordinates: CoordinatesModel): Observable<ShopModel> {
    return undefined;
  }

}
