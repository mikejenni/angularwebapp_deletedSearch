import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MovieResponse} from '../../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(' https://api.themoviedb.org/3/movie/550?api_key=cc93ac48875a099105b9238502f49a3a&language=en-US');
  }

}
