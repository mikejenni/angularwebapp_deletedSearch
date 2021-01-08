import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavMoviesResponse, Result} from '../../models/FavMovies';
import {FavMoviesService} from '../../services/favmovies/favmovies.service';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-moviee',
  templateUrl: './moviee.component.html',
  styleUrls: ['./moviee.component.scss']
})
export class MovieeComponent implements OnInit {
  private favMoviesService: any;
  private favList: Array<Result>;
  private router: any;

  constructor(private favoriteservice: FavMoviesService) { }

  posterpath = 'https://image.tmdb.org/t/p/w500/';
  toggle = false;
  addToFavoritesButton = 'Add to favorites';

  isFavorite = false;
  @Input() movie: any;
  @Output() updateMoviee: EventEmitter<void> = new EventEmitter<void>();



  ngOnInit(): void {
    this.favoriteservice.isFavorite(this.movie.id).subscribe((isFavorite: boolean) => {
      this.isFavorite = isFavorite;
    });
  }


  addToFavorites(): void{
        console.log('test');
        if (this.isFavorite) {
          this.favoriteservice.deleteFavorite(this.movie).subscribe(response => {
            if (response.status === 200) {
              this.isFavorite = false;
              location.reload();
            }
          });
        } else {
          this.favoriteservice.addToFavorite(this.movie).subscribe(response => {
            if (response.status === 200) {
              this.isFavorite = true;

            }
          });
        }
  }
}
