import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { PopmoviesComponent } from './components/popmovies/popmovies.component';
import { FavmoviesComponent } from './components/favmovies/favmovies.component';
import { BestmoviesComponent } from './components/bestmovies/bestmovies.component';
import { ReleasemoviesComponent } from './components/releasemovies/releasemovies.component';
import { GenresComponent } from './components/genres/genres.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieeComponent } from './components/moviee/moviee.component';

@NgModule({
  declarations: [
    AppComponent,
    AllmoviesComponent,
    PopmoviesComponent,
    FavmoviesComponent,
    BestmoviesComponent,
    ReleasemoviesComponent,
    GenresComponent,
    MovieComponent,
    MovieeComponent
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
