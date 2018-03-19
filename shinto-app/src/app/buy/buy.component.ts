import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
title= 'Buy ShintoCoins'
value: number;
count: number;

  constructor(private _httpService: HttpService) { 
  this.value = this._httpService.value
  this.count = this._httpService.CoinCount;
  }
  ngOnInit() {
  }
  buyCoins(num){
    this._httpService.newPurchase('Buy', num);
    this._httpService.CoinCount+=num;
    this._httpService.value+=num;
    this.count = this._httpService.CoinCount;
    this.value = this._httpService.value;
  }

}
