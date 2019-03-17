import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocksentiment',
  templateUrl: './stocksentiment.component.html',
  styleUrls: ['./stocksentiment.component.css']
})
export class StocksentimentComponent implements OnInit {

    const heroes = [
    {id: 1, name:'Superman'},
    {id: 4, name:'Shazam'}
    ];
        const heroes1 = [
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];
  constructor() { }

  ngOnInit() {

  }

}
