import { Component } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';

import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(
     private navParams: NavParams,
    private navCtrl: NavController
  ){}

 onGoToBuyout(product:string){
    this.navCtrl.push(BuyoutPage, product);
  }
 
}
