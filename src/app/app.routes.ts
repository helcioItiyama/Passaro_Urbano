import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EnjoyComponent } from './enjoy/enjoy.component';
import { DealComponent } from './deal/deal.component';
import { HowToUseComponent } from './deal/how-to-use/how-to-use.component';
import { WhereIsItComponent } from './deal/where-is-it/where-is-it.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantsComponent },
  { path: 'diversao', component: EnjoyComponent },
  { path: 'oferta', component: DealComponent },
  { path: 'oferta/:id', component: DealComponent, children: [
      { path: '', component: HowToUseComponent},
      { path: 'como-usar', component: HowToUseComponent},
      { path: 'onde-fica', component: WhereIsItComponent }
    ]
  }
]
