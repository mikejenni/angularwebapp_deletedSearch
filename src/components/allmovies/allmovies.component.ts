import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {MoviesService} from '../../services/movies/movies.service';


@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {
 
  constructor(private moviesService: MoviesService) {
    
   }

  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
  }
  
}
