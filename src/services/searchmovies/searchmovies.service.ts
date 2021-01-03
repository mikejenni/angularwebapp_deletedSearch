import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SearchMoviesResponse} from '../../models/SearchMovies';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private http: HttpClient) { }

  getSearchMovies(): Observable<SearchMoviesResponse> {
    return this.http.get<SearchMoviesResponse>(' https://api.themoviedb.org/3/movie/top_rated?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&page=1');
  }

}
