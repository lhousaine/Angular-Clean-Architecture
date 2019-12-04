import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllShopsUsecase implements UseCase<void, ShopModel> {
  execute(params: void): Observable<ShopModel> {
    return undefined;
  }
}
