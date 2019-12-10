import {UserModel} from '../Domain/User.model';
import {Observable} from 'rxjs';
import {ShopModel} from '../Domain/Shop.model';

export abstract class UserRepository {
    abstract loginUser(data:any):Observable<any>;
    abstract registerUser(user:any): Observable<UserModel>;
    abstract getUserEmail(email:string): Observable<UserModel>;
    abstract dislikeNewShop(email: string, shopName:string): Observable<ShopModel>;
    abstract likeNewShop(email: string, shopName:string): Observable<ShopModel>;
    abstract removeLikedShop(email: string, shopName:string): Observable<ShopModel>;
}
