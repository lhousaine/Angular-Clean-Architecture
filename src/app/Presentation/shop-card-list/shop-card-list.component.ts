import { Component, OnInit } from '@angular/core';
import {ShopModel} from '../../Core/Domain/Shop.model';
import {GetAllShopsUsecase} from '../../Core/Usecases/shopUsecases/get-all-shops.usecase';

@Component({
  selector: 'app-shop-card-list',
  templateUrl: './shop-card-list.component.html',
  styleUrls: ['./shop-card-list.component.css']
})
export class ShopCardListComponent implements OnInit {
  shops:Array<ShopModel>;
  constructor(private getAllShopsUsecase : GetAllShopsUsecase) { }

  ngOnInit(){
    this.shops = [];
    this.getAllShopsUsecase.execute(null).subscribe((value: ShopModel) => {
    this.shops.push(value);
    });
  }

  likeShop(name: string) {
    
  }

  dislikeShop(name: string) {
    
  }
}
