import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { DetailstockService } from '../services/detailstock.service';
import { element } from '@angular/core/src/render3';
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions: any;
  data1 =[];
  data2 =[];
  loaded = false;
  loaded1 = false;
  constructor(private detailservice:DetailstockService) { }

  ngOnInit() {
  
    this.detailservice.GetActualHistoricalData().subscribe(t=>{
      console.log("dat1",t)
      t.forEach(element => {
        let arr = [new Date(element.date).getTime(),element.close]

        this.data2.push(arr);
       
      })
      this.loaded1 = true;
      this.SetChartOptions();
      
    })};

  SetChartOptions()
  {
    if(this.loaded == true && this.loaded1 == true)
    {
      console.log("dat",this.data1);
      console.log("dat",this.data2);
      this.chartOptions = {
        xAxis: {
          type: 'datetime'
      },
        series: [{
            name: 'Forcasted',
           
            type: 'line',
            data: this.data1,
            gapSize: 5,
            tooltip: {
                valueDecimals: 2
            },
            },
            {
              name: 'Actual',
              type: 'line',
              data: this.data2,
              gapSize: 5,
              tooltip: {
                  valueDecimals: 2
              },
              },
              
            
      ]
    };

    }
    else{
      console.log("Not Loaded");
    }
  }
}