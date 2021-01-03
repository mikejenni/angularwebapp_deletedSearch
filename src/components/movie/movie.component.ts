import { Component, OnInit } from '@angular/core';
import {MovieResponse} from '../../models/Movie';
import {MovieService} from '../../services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
 
  constructor(private movieService: MovieService) {
    
  }

 movieResponse: MovieResponse;
 posterpath = "https://image.tmdb.org/t/p/w500/";

 ngOnInit(): void {
   this.movieService.getMovie()
     .subscribe((data: MovieResponse) => this.movieResponse = { ...data});
 }
 
}
