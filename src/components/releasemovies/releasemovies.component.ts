import { Component, OnInit } from '@angular/core';
import {ReleaseMoviesResponse} from '../../models/ReleaseMovies';
import {ReleaseMoviesService} from '../../services/releasemovies/releasemovies.service';

@Component({
  selector: 'app-releasemovies',
  templateUrl: './releasemovies.component.html',
  styleUrls: ['./releasemovies.component.scss']
})
export class ReleasemoviesComponent implements OnInit {

  constructor(private releaseMoviesService: ReleaseMoviesService) { 
  }

  releaseMoviesResponse: ReleaseMoviesResponse;
 posterpath = "https://image.tmdb.org/t/p/w500/";

 ngOnInit(): void {
   this.releaseMoviesService.getReleaseMovies()
     .subscribe((data: ReleaseMoviesResponse) => this.releaseMoviesResponse = { ...data});
 }
 
}