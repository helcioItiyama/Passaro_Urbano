import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EnjoyComponent } from './enjoy/enjoy.component';
import { DealComponent } from './deal/deal.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantsComponent },
  { path: 'diversao', component: EnjoyComponent },
  { path: 'oferta', component: DealComponent },
  { path: 'oferta/:id', component: DealComponent }
]
