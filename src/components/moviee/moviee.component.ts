import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Result} from '../../models/FavMovies';
import {FavMoviesService} from '../../services/favmovies/favmovies.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-moviee',
  templateUrl: './moviee.component.html',
  styleUrls: ['./moviee.component.scss']
})
export class MovieeComponent implements OnInit {

  constructor(private favoriteservice: FavMoviesService) { }

  posterpath = 'https://image.tmdb.org/t/p/w500/';
  toggle = false;
  addToFavoritesButton = 'Add to favorites';
  @Input() movie: any;
  @Output() updateMoviee: EventEmitter<void> = new EventEmitter<void>();



  ngOnInit(): void {
  }

  addToFavorites(movie: Result): void{
    alert(movie.id);
    this.toggle = !this.toggle;
    if (this.toggle === true) {
      this.addToFavoritesButton = 'Remove from favorites';
    } else {
      this.addToFavoritesButton = 'Add to favorites';
    }
    console.log(movie);
    this.favoriteservice.addToFavorite(movie)
      .subscribe(response => {
        console.log(response);
      });
  }
  deleteFavorite(index: number): void {
    this.favoriteservice.deleteFavorite(this.movie[index])
      .subscribe((response: any) => {
        this.updateMoviee.emit();
      });
  }

}
