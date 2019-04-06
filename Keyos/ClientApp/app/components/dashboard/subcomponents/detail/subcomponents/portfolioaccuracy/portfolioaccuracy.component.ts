import { Component, OnInit } from '@angular/core';
import { DetailstockService } from '../../../../../../services/detailstock.service';
import { Portfolio } from '../../../../../../models/StockModel';

@Component({
  selector: 'app-portfolioaccuracy',
  templateUrl: './portfolioaccuracy.component.html',
  styleUrls: ['./portfolioaccuracy.component.css']
})
export class PortfolioaccuracyComponent implements OnInit {
  Portfolio:Portfolio[];
  constructor(private detailService:DetailstockService) { }

  ngOnInit() {
    this.detailService.GetActualHistoricalPortfolio().subscribe(data =>{this.Portfolio = data});
  }

}
