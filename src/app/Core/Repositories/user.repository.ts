import {UserModel} from '../Domain/User.model';
import {Observable} from 'rxjs';

export abstract class UserRepository {
    abstract loginUser(email: string, password: string): Observable<UserModel>;
    abstract registerUser(user: UserModel , password: string): Observable<UserModel>;
    abstract dislikeNewShop(idUser: number, shopName: string): Observable<UserModel>;
    abstract likeNewShop(idUser: number, shopName: string): Observable<UserModel>;
    abstract dremoveLikedShop(idUser: number, shopName: string): Observable<UserModel>;
}
