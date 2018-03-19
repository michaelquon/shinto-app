import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  ledger = [];
  purchase: any;
  CoinCount = 0;
  value = 1;

  constructor() { 
    this.purchase = {id: 0, action: "", totalCoins: 0, value: 0};
  }
  newPurchase(method, num){
    this.purchase.id = Math.trunc(Math.random()*1000+1)
    this.purchase.action = method;
    this.purchase.totalCoins = num;
    this.purchase.value = this.value;
    this.ledger.push(this.purchase);
    this.purchase = {id: 0, action: "", totalCoins: 0, value: 0};
  }
}

