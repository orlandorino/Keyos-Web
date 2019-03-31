import { Component, OnInit } from '@angular/core';
import { DetailstockService } from '../../../../../../services/detailstock.service';

@Component({
  selector: 'app-stocksentiment',
  templateUrl: './stocksentiment.component.html',
  styleUrls: ['./stocksentiment.component.css']
  })



export class StocksentimentComponent implements OnInit {

    postivePercent: string;
    negativePercent: string;
    heroes: Array<String> = [];
    heroes1: Array<String> = [];

  constructor(private detailservice:DetailstockService) { }

    ngOnInit() {
        this.detailservice.GetSentimentPercentageData().subscribe (t =>{
        
          t.forEach(element => {

              this.postivePercent = element.positive.toFixed(2);
              this.negativePercent = element.negative.toFixed(2);
              
          });
          
             
        });


        this.detailservice.GetSentimentMessageData().subscribe (t =>{ 


        let data = [];
          t.forEach(element => {

              //console.log(element.tweet);
              //this.heroes.push(element.tweet);
              //var arr = [element.tweet];
              console.log(element.tweet);
              if (element.sentiment == "positive") {
                  var tweet = element.sentiment;
                  var n = element.sentiment.includes("@RobinhoodApp");
                  if (n == false){
                      console.log(n);
                      this.heroes.push(element.tweet);
                  }


              } else {
                  this.heroes1.push(element.tweet);
              }

              //console.log(data);
              //this.postivePercent = element.positive.toFixed(2);
              //this.negativePercent = element.negative.toFixed(2);
              
          });
          
             
    });

  }

}
