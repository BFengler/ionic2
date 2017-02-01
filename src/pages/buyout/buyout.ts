import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
  product: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {}
  ngOnInit(){
      this.product = this.navParams.data ;
  }
  
  goHome(){
    this.navCtrl.popToRoot();
  }

}
