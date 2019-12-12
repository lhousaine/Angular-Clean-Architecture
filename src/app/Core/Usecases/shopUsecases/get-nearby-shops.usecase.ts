import {UseCase} from '../../Base/usecase';
import {CoordinatesModel} from '../../Domain/Coordinates.model';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ShopRepository} from '../../Repositories/shop.repository';
import {UserModel} from '../../Domain/User.model';

@Injectable({
  providedIn: 'root'
})
export class GetNearbyShopsUsecase implements UseCase<UserModel, ShopModel > {
  constructor(private shopRepository:ShopRepository){

  }

  execute(params: UserModel): Observable<ShopModel> {
    return this.shopRepository.getShopsNearbyToCoordinates(params);
  }
}
