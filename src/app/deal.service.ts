import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Deal } from './shared/deals.model';
import { URL_API } from './app.api';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class DealService {
  constructor(private http: Http) {}

  public getDeal(): Promise<Deal[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((response:Response) => response.json())
  }

  public getDealPerCategory(category:string): Promise<Deal[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${category}`)
      .toPromise()
      .then((response:Response) => response.json())
  }

  public getDealById(id:number):Promise<Deal> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((response:Response) => response.json()[0])
  }

  public howToUseDealById(id:number):Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((response:Response) => response.json()[0].descricao)
  }

  public whereIsItDealById(id:number):Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((response:Response) => response.json()[0].descricao)
  }

  public searchDeal(term:string):Observable<Deal[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${term}`)
      .retry(10)
      .map((response:Response)=> response.json());
  }
}
