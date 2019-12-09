import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {UserRepository} from '../../Repositories/user.repository';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DislikeNewShopUsecase implements UseCase<Map<string,string>,ShopModel>{

  constructor(private userRepository:UserRepository){

  }

  execute(params: Map<string,string>): Observable<ShopModel> {
    return this.userRepository.dislikeNewShop(params.get("email"),params.get("shopName"));
  }

}

