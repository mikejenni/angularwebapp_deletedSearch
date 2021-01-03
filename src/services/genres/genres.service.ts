import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GenresResponse} from '../../models/Genres';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>('https://api.themoviedb.org/3/genre/movie/list?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH');
  }

}
