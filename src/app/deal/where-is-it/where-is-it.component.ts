import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.dealService.whereIsItDealById(this.route.parent.snapshot.params['id'])
      .then((description: string) => {
        this.whereIsIt = description;
      })
  }

}
