import { Component, OnInit } from '@angular/core';
import { Deal } from '../shared/deals.model';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-enjoy',
  templateUrl: './enjoy.component.html',
  styleUrls: ['./enjoy.component.css'],
  providers: [DealService]
})
export class EnjoyComponent implements OnInit {
  public deals:Deal[];

  constructor(private dealService:DealService) { }

  ngOnInit() {
    this.dealService.getDealPerCategory('diversao')
      .then((deals:Deal[]) => {
        this.deals = deals;
      })
  }

}
