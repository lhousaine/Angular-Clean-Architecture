import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShopModel} from '../../Core/Domain/Shop.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() shop: ShopModel;
  @Input() shopPage: string;
  @Output() LikeShop: EventEmitter<string> = new EventEmitter<string>();
  @Output() DislikeShop: EventEmitter<string> = new EventEmitter<string>();
  @Output() RemoveLikedShop: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }

  likeShop(shopName: string) {
    this.LikeShop.emit(shopName);
  }

  dislikeShop(shopName: string) {
    this.DislikeShop.emit(shopName);
  }

  removeLikedShop(shopName: string) {
    this.RemoveLikedShop.emit(shopName);
  }

}
