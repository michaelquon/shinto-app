import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  title = 'Sell ShintoCoins'
  value: number;
  count: number;
  error: string;
  constructor(private _httpService: HttpService) { 
  this.value = this._httpService.value
  this.count = this._httpService.CoinCount
  }
  ngOnInit() {
  }
  sellCoins(num){
    num = parseInt(num);
      if(num == this.count){
        this._httpService.newPurchase('Sold', num)
        this._httpService.CoinCount -= num;
        this._httpService.value -= num;
        this.value =this._httpService.value;
        this.count =this._httpService.CoinCount;
        
      }
      else{
        this.error = "You can't sell coins you don't have"
      }
  }
}
