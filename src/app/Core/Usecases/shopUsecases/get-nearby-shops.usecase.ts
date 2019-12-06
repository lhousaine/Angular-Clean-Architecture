import {UseCase} from '../../Base/usecase';
import {CoordinatesModel} from '../../Domain/Coordinates.model';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ShopRepository} from '../../Repositories/shop.repository';

@Injectable({
  providedIn: 'root'
})
export class GetNearbyShopsUsecase implements UseCase<CoordinatesModel, ShopModel > {
  constructor(private shopRepository:ShopRepository){

  }

  execute(params: CoordinatesModel): Observable<ShopModel> {
    return this.shopRepository.getShopsNearbyToCoordinates(params);
  }
}
