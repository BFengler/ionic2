import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';

import { ShopPage } from '../shop/shop';

import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  onGoToUsers(){
    this.navCtrl.push(UsersPage);
  }
  onGoToShop(){
    this.navCtrl.push(ShopPage);
  }
  onGoToBuyout(){
    this.navCtrl.push(BuyoutPage);
  }

}
