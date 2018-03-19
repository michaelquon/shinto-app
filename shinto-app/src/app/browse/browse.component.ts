import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
title = 'Browse the Ledger'
purchases =[]
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getLedger()
  }
  

getLedger(){
  this.purchases = this._httpService.ledger
}
}