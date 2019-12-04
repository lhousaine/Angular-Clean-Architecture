import {UseCase} from '../../Base/usecase';
import {CoordinatesModel} from '../../Domain/Coordinates.model';
import {ShopModel} from '../../Domain/Shop.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNearbyShopsUsecase implements UseCase<CoordinatesModel, ShopModel > {
  execute(params: CoordinatesModel): Observable<ShopModel> {
    return undefined;
  }
}
