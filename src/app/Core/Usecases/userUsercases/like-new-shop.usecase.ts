import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../../Repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class LikeNewShopUsecase implements UseCase<Map<string,string>,ShopModel>{

  constructor(private userRepository:UserRepository){

  }
  execute(params: Map<string,string>): Observable<ShopModel> {
    return this.userRepository.likeNewShop(params.get("email"),params.get("shopName"));
  }

}
