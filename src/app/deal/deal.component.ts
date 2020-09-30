import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealService } from '../deal.service';
import { Deal } from '../shared/deals.model';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
  providers: [DealService]
})
export class DealComponent implements OnInit {
  public deal:Deal;

  constructor(
    private route:ActivatedRoute,
    private dealService:DealService
    ) {}

  ngOnInit() {
    this.dealService.getDealById(this.route.snapshot.params['id'])
      .then((deal:Deal) => {
        this.deal = deal;
      });
  }

}
