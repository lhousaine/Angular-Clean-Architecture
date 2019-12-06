import {UserModel} from '../Domain/User.model';
import {Observable} from 'rxjs';
import {ShopModel} from '../Domain/Shop.model';

export abstract class UserRepository {
    abstract loginUser(data);
    abstract registerUser(user:Object): Observable<UserModel>;
    abstract dislikeNewShop(idUser: number, idShop:number): Observable<ShopModel>;
    abstract likeNewShop(idUser: number, idShop:number): Observable<ShopModel>;
    abstract removeLikedShop(idUser: number, idShop:number): Observable<ShopModel>;
}
