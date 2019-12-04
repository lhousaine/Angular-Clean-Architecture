import {UseCase} from '../../Base/usecase';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSchopByIdUsecase implements UseCase<string, ShopModel> {
  execute(params: string): Observable<ShopModel> {
    return undefined;
  }

}
