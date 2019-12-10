import { Component, OnInit } from '@angular/core';
import {ShopModel} from '../../Core/Domain/Shop.model';
import {UserPrefferedShopsUsecase} from '../../Core/Usecases/shopUsecases/user-preffered-shops.usecase';
import {AuthenticationUtil} from '../../Core/Utils/authentication.util';
import {RemoveLikedShopUsecase} from '../../Core/Usecases/userUsercases/remove-liked-shop.usecase';
import {UserModel} from '../../Core/Domain/User.model';


@Component({
  selector: 'app-preffered-shops',
  templateUrl: './preffered-shops.component.html',
  styleUrls: ['./preffered-shops.component.css']
})
export class PrefferedShopsComponent implements OnInit {

  shops: ShopModel[];
  shopPage: string;
  currentUser:UserModel;
  constructor(private preferredShopsUsecase: UserPrefferedShopsUsecase,
              private authUtil: AuthenticationUtil,
              private removeShopUsecase:RemoveLikedShopUsecase) {
     this.authUtil.currentUser.subscribe(data=>{
       this.currentUser=data;
     })
  }

  ngOnInit() {
    this.shopPage="preferred";
    this.shops = [];
    this.preferredShopsUsecase.execute(this.currentUser.email).subscribe(
      (value: ShopModel) => {
        this.shops.push(value);
      });
  }

  RemoveLikedShop(shopName:string){
       let data= new Map<string,string>();
       data.set("email",this.currentUser.email);
       data.set("shopName",shopName);
      this.removeShopUsecase.execute(data).subscribe(data=>{
        console.log(data);
      },error => {
        console.log(error);
      });
  }
}
