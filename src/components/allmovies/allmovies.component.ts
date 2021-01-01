import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {MoviesService} from '../../services/movies/movies.service';


@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {
  rows: any[] = [];
  tests: any[] = []; 
 
  constructor(private moviesService: MoviesService) {
    this.rows = this.multiArray;    
    this.tests = this.moviesService;        
    
   }
  moviesResponse: MoviesResponse;
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
    this.moviesService.getMovies()
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
  }

}
