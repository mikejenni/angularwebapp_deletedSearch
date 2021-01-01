import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FavMoviesResponse} from '../../models/FavMovies';

@Injectable({
  providedIn: 'root'
})
export class FavMoviesService {

  constructor(private http: HttpClient) { }

  getFavMovies(): Observable<FavMoviesResponse> {
    return this.http.get<FavMoviesResponse>(' https://api.themoviedb.org/3/discover/movie?api_key=cc93ac48875a099105b9238502f49a3a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }

}
