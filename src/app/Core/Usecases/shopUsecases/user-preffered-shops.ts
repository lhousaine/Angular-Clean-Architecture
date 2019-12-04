import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPrefferedShops implements UseCase<number, ShopModel> {
  execute(params: number): Observable<ShopModel> {
    return undefined;
  }
}
