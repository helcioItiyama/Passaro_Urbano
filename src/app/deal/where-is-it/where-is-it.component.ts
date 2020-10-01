import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DealService } from '../../deal.service';

@Component({
  selector: 'app-where-is-it',
  templateUrl: './where-is-it.component.html',
  styleUrls: ['./where-is-it.component.css']
})
export class WhereIsItComponent implements OnInit {
  public whereIsIt:string = '';

  constructor(
    private route:ActivatedRoute,
    private dealService:DealService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((routeParams:Params) => {
      this.dealService.whereIsItDealById(routeParams.id)
        .then((description: string) => {
          this.whereIsIt = description;
        })
    })
  }

}
