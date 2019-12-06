import { Injectable } from '@angular/core';
import {UserRepository} from '../../../Core/Repositories/user.repository';
import {Observable} from 'rxjs';
import {ShopModel} from '../../../Core/Domain/Shop.model';
import {UserModel} from '../../../Core/Domain/User.model';
import {UserWebRepositoryMapper} from '../../repositories-mappers/user-web-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class UserMockRepository extends UserRepository{
  private userMapper=new UserWebRepositoryMapper();
  users=[
    {
      id: 0,
      firstName: "lhoussaine",
      lastName: "ouarhou",
      email: "em@gmail.com",
      password:"12345678",
      address: {
        zipCode:123,
        addressLine:"rue 12",
        city:"marrakech",
        country:"maroc"
      },
      coordinates: {
        latitude:12.3,
        longitude:35
      }
    },{
      id: 1,
      firstName: "lhoussaine",
      lastName: "ouarhou",
      email: "lhou@gmail.com",
      password:"12345678",
      address: {
        zipCode:12,
        addressLine:"rue 6",
        city:"Agadir",
        country:"maroc"
      },
      coordinates: {
        latitude:15.3,
        longitude:40
      }
    }
  ]
  constructor(){
    super();
  }
  dislikeNewShop(idUser: number, idShop: number): Observable<ShopModel> {
    return undefined;
  }

  likeNewShop(idUser: number, idShop: number): Observable<ShopModel> {
    return undefined;
  }

  loginUser(data) {
  }

  registerUser(user: Object): Observable<UserModel> {
    return undefined;
  }

  removeLikedShop(idUser: number, idShop: number): Observable<ShopModel> {
    return undefined;
  }

}
