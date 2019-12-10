import { Component, OnInit } from '@angular/core';
import {RemoveLikedShopUsecase} from '../../Core/Usecases/userUsercases/remove-liked-shop.usecase';
import {ShopModel} from '../../Core/Domain/Shop.model';
import {UserModel} from '../../Core/Domain/User.model';
import {GetNearbyShopsUsecase} from '../../Core/Usecases/shopUsecases/get-nearby-shops.usecase';
import {AuthenticationUtil} from '../../Core/Utils/authentication.util';
import {LikeNewShopUsecase} from '../../Core/Usecases/userUsercases/like-new-shop.usecase';
import {DislikeNewShopUsecase} from '../../Core/Usecases/userUsercases/dislike-new-shop.usecase';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {
  shops: ShopModel[];
  shopPage: string;
  currentUser:UserModel;
  constructor(private nearbyShopsUsecase:GetNearbyShopsUsecase,
              private likeNewShopUsecase:LikeNewShopUsecase,
              private dislikeNewShopUsecase:DislikeNewShopUsecase,
              private authUtil:AuthenticationUtil) {
    this.authUtil.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

  ngOnInit() {
    this.shopPage="nearby";
    this.shops = [];
    this.nearbyShopsUsecase.execute(this.currentUser.coordinates).subscribe(
      (value: ShopModel) => {
        this.shops.push(value);
      });
  }

  likeShop(shopName:string){
    let data= new Map<string,string>();
    data.set("email",this.currentUser.email);
    data.set("shopName",shopName);
    this.likeNewShopUsecase.execute(data).subscribe(data=>{
      console.log(data);
    },error => {
      console.log(error);
    });
  }
  dislikeShop(shopName:string){
    let data= new Map<string,string>();
    data.set("email",this.currentUser.email);
    data.set("shopName",shopName);
    this.dislikeNewShopUsecase.execute(data).subscribe(data=>{
      console.log(data);
    },error => {
      console.log(error);
    });
  }
}
