import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Deal } from './shared/deals.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealService {
  constructor(private http: Http) {}

  public getDeal(): Promise<Deal[]> {
    return this.http.get('http://localhost:3000/ofertas/?destaque=true')
    .toPromise()
    .then(response => response.json())
  }
}
