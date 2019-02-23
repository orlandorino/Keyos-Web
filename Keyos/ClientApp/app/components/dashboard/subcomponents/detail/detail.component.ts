import { Component, OnInit } from '@angular/core';
import { DetailstockService } from '../../../../services/detailstock.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private detailservice:DetailstockService) { }

  ngOnInit() {
    var sym  = this.detailservice.getSymbol();
    this.detailservice.getDetails(sym);
  }

}
