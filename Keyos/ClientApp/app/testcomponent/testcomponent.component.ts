import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnInit() {
    let data =[[1147651200000,67.79],
    [1147737600000,64.98],
    [1147824000000,65.26],
    [1147910400000,63.18],
    [1147996800000,64.51],
    [1148256000000,63.38],
    [1148342400000,63.15],
    [1148428800000,63.34],
    [1148515200000,64.33],
    [1148601600000,63.55],
    [1148947200000,61.22],
    [1149033600000,59.77] ]
  this.chartOptions = {   

  
    navigator: {
        enabled: false
    },
    scrollbar: {
        enabled: false
    },
   
    rangeSelector: {
      selected: 1
  }, 
  xAxis: {
    type: 'datetime'

    
},

  title: {
      text: 'AAPL Stock Price'
  },

  series: [{
      name: 'AAPL Stock Price',
      data: data,
      type: 'spline',
      tooltip: {
          valueDecimals: 2
      }
  }]
};
  }


}