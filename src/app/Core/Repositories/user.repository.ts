import {UserModel} from '../Domain/User.model';

export abstract class UserRepository {
    abstract loginUser(email: string, password: string): boolean;
    abstract registerUser(user: UserModel , password: string): UserModel;
    abstract dislikeNewShop(idUser: number, shopName: string): UserModel;
    abstract likeNewShop(idUser: number, shopName: string): UserModel;
    abstract dremoveLikedShop(idUser: number, shopName: string): UserModel;
}
