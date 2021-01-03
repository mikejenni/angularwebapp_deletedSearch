import { Component, OnInit } from '@angular/core';
import {PopMoviesResponse} from '../../models/PopMovies';
import {PopMoviesService} from '../../services/popmovies/popmovies.service';

@Component({
  selector: 'app-popmovies',
  templateUrl: './popmovies.component.html',
  styleUrls: ['./popmovies.component.scss']
})
export class PopmoviesComponent implements OnInit {

  rows: any[] = []; 
  constructor(private moviesService: PopMoviesService) {
    this.rows = this.multiArray;        
   }
   popMoviesResponse: PopMoviesResponse;
   posterpath = "https://image.tmdb.org/t/p/w500/";
   
   multiArray = [
    //row 1
    [
      {cellValue:'row1 col1', cellId: 1},
      {cellValue:'row1 col2', cellId: 1},
    ],
    //row 2
    [
      {cellValue:'row2 col1', cellId: 2},
      {cellValue:'row2 col2', cellId: 1}      
    ],
    //row 3
    [
      {cellValue:'row3 col1', cellId: 3},
      {cellValue:'row3 col2', cellId: 1}      
    ]
  ]

  ngOnInit(): void {
  }

  loadMovies(): void {
    this.moviesService.getPopMovies()
      .subscribe((data: PopMoviesResponse) => this.popMoviesResponse = { ...data});
  }

}
