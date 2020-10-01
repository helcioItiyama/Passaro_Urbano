import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EnjoyComponent } from './enjoy/enjoy.component';

import { ROUTES } from './app.routes';
import { DealComponent } from './deal/deal.component';
import { HowToUseComponent } from './deal/how-to-use/how-to-use.component';
import { WhereIsItComponent } from './deal/where-is-it/where-is-it.component';
import { ShortDescription } from './util/short-desription.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    EnjoyComponent,
    DealComponent,
    HowToUseComponent,
    WhereIsItComponent,
    ShortDescription
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
