import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})
export class TableOrdersComponent implements OnInit {

  ordersTable1: any[];
  ordersTable2: any[];

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
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
      ];
  }

}
