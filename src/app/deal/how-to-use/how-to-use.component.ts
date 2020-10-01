import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DealService } from '../../deal.service';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [DealService]
})
export class HowToUseComponent implements OnInit {
  public howToUse:string = '';

  constructor(
    private route: ActivatedRoute,
    private dealService:DealService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((routeParams:Params) =>{
      this.dealService.howToUseDealById(routeParams.id)
        .then((description:string) => {
          this.howToUse = description;
        })
    })
  }

}
