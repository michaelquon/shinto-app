import { Component, OnInit, transition } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
title = 'Mine ShintoCoins'
results = ''
  constructor(private _httpService: HttpService) { }
 
  ngOnInit() {
  }
  mineSubmit(choice){
    if(choice == 13){
      this._httpService.newPurchase('Mined', 1)
      this._httpService.CoinCount++;
      this._httpService.value++;
      this.results = "That's Correct, You successfully mined a ShintoCoin!"
    }
    else{
      this.results = "That's Incorrect, You have not successfully mined any ShintoCoins!"
    }
  }
}
