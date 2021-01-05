import { Component, OnInit } from '@angular/core';
import {FavMoviesResponse, Result} from '../../models/FavMovies';
import {FavMoviesService} from '../../services/favmovies/favmovies.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.scss']
})
export class FavmoviesComponent implements OnInit {

  constructor(private favMoviesService: FavMoviesService) {
   }


   favMoviesResponse: FavMoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";

  ngOnInit(): void {
    this.favMoviesService.getFavMovies()
      .subscribe((data: FavMoviesResponse) => this.favMoviesResponse = { ...data});
  }



}
