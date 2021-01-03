import { Component, OnInit } from '@angular/core';
import {GenresResponse} from '../../models/Genres';
import {GenresService} from '../../services/genres/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  constructor(private genresService: GenresService) {
    
  }

  genresResponse: GenresResponse;
 posterpath = "https://image.tmdb.org/t/p/w500/";

 ngOnInit(): void {
   this.genresService.getGenres()
     .subscribe((data: GenresResponse) => this.genresResponse = { ...data});
 }

}
