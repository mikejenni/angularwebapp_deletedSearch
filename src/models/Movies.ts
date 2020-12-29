export interface MoviesResponse {
  type: string;
  id: number;
  value: Movies;
}

export interface Movies {
  id: number;
  joke: string;
  categories: Array<string>;
}
