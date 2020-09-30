import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DealService } from '../deal.service';
import { Deal } from '../shared/deals.model';

import '../util/rxjs-extensions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DealService]
})
export class HeaderComponent implements OnInit {
  public deals: Observable<Deal[]>;
  public deals2: Deal[];
  public subjectSearch: Subject<string> = new Subject<string>();

  constructor(private dealService:DealService) { };

  ngOnInit() {
    this.deals = this.subjectSearch// return Deal[]
      .debounceTime(1000) //execute action after 1sec
      .distinctUntilChanged()
      .switchMap((term:string) => {
        console.log('call api')
        if(term.trim() === '') {
          //return Observable array of empty deal
          return Observable.of<Deal[]>([]);
        }

        return this.dealService.searchDeal(term)
      })
      .catch((error:any) => Observable.of<Deal[]>([]))

    this.deals.subscribe((deals:Deal[]) => {
      this.deals2 = deals;
    })
  };

  public search(searchTerm:string):void {
    console.log('keyup')
    this.subjectSearch.next(searchTerm)
  };
}
