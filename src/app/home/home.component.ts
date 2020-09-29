import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { Deal } from '../shared/deals.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DealService]
})
export class HomeComponent implements OnInit {
  public deals: Array<Deal>;

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.dealService.getDeal()
      .then((deals: Deal[]) => this.deals = deals)
      .catch(param => {console.log(param)});
  }

}
