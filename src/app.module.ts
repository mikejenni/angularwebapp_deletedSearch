import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HttpComponent } from './components/http/http.component';
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { PopmoviesComponent } from './components/popmovies/popmovies.component';
import { FavmoviesComponent } from './components/favmovies/favmovies.component';
import { BestmoviesComponent } from './components/bestmovies/bestmovies.component';
import { ReleasemoviesComponent } from './components/releasemovies/releasemovies.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HttpComponent,
    AllmoviesComponent,
    PopmoviesComponent,
    FavmoviesComponent,
    BestmoviesComponent,
    ReleasemoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
