import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../../Repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class LikeNewShopUsecase implements UseCase<Map<string,number>,ShopModel>{

  constructor(private userRepository:UserRepository){

  }
  execute(params: Map<string, number>): Observable<ShopModel> {
    return this.userRepository.likeNewShop(params.get("idUser"),params.get("idShop"));
  }

}
