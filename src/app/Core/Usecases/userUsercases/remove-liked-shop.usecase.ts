import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserRepository} from '../../Repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class RemoveLikedShopUsecase implements UseCase<Map<string,number>,ShopModel>{
  constructor(private userRepository:UserRepository){

  }

  execute(params: Map<string, number>): Observable<ShopModel> {
    return this.userRepository.removeLikedShop(params.get("idUser"),params.get("idShop"));
  }

}
