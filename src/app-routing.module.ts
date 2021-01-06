import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HttpComponent } from './components/http/http.component'
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { BestmoviesComponent } from './components/bestmovies/bestmovies.component';
import { PopmoviesComponent } from './components/popmovies/popmovies.component';
import { ReleasemoviesComponent } from './components/releasemovies/releasemovies.component';
import { FavmoviesComponent } from './components/favmovies/favmovies.component';
import { GenresComponent } from './components/genres/genres.component';
import { MovieComponent } from './components/movie/movie.component';



const routes: Routes = [ // sets up routes constant where you define your routes
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'http-component', component: HttpComponent },
  { path: 'allmovies-component', component: AllmoviesComponent },
  { path: 'bestmovies-component', component: BestmoviesComponent },
  { path: 'popmovies-component', component: PopmoviesComponent },
  { path: 'releasemovies-component', component: ReleasemoviesComponent },
  { path: 'favmovies-component', component: FavmoviesComponent },
  { path: 'genres-component', component: GenresComponent },
  { path: 'movie-component', component: MovieComponent },



];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
