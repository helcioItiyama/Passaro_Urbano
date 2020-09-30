import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.dealService.howToUseDealById(this.route.parent.snapshot.params['id'])
      .then((description:string) => {
        this.howToUse = description;
      })
  }

}
