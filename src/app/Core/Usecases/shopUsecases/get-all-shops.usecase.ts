import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ShopRepository} from '../../Repositories/shop.repository';


@Injectable({
  providedIn: 'root'
})
export class GetAllShopsUsecase implements UseCase<void, ShopModel> {
  constructor(private shopRepository:ShopRepository){

  }
  execute(params: void): Observable<ShopModel> {
    return this.shopRepository.getAllShops();
  }
}
