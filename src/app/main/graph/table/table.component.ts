import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ordersTable1: any[];
  ordersTable2: any[];
  tradesTable: any[];

  constructor() { }

  ngOnInit() {

    this.ordersTable1 = [
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
    ];

      this.ordersTable2 = [
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
      ];

      this.tradesTable = [
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'down', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
      ];
  }

}
