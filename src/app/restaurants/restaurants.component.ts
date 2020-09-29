import { Component, OnInit } from '@angular/core';
import { Deal } from '../shared/deals.model';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [DealService]
})
export class RestaurantsComponent implements OnInit {
  public deals: Deal[];

  constructor(private dealService:DealService) { }

  ngOnInit() {
    this.dealService.getDealPerCategory('restaurante')
      .then((deals:Deal[]) => {
        this.deals = deals;
      })
  }

}
