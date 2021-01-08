import { Component, OnInit } from '@angular/core';
import {FavMoviesResponse, Result} from '../../models/FavMovies';
import {FavMoviesService} from '../../services/favmovies/favmovies.service';
import {MovieeComponent} from '../moviee/moviee.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.scss']
})

export class FavmoviesComponent implements OnInit {

  constructor(private favMoviesService: FavMoviesService) {
   }
  favList: Array<Result> = [];

   favMoviesResponse: FavMoviesResponse;
  posterpath = 'https://image.tmdb.org/t/p/w500/';


  ngOnInit(): void {
    this.favMoviesService.getFavMovies()
      .subscribe((data: Array<Result>) => {
        this.favList = data;
        console.log(this.favList);
      });
  }



}
