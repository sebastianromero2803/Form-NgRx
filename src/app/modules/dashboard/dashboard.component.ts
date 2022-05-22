import { Component } from "@angular/core";
import { MoviesService } from "@app-services/movies.service";
import { MovieInterface, MovieListResponse } from "@app-models/movie.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  movieList: MovieInterface[];
  favoriteShows: MovieInterface[];
  selectedColor: string;
  today: Date;
  message: string = '';
  constructor(private moviesService: MoviesService) {
    this.movieList = [];
    this.favoriteShows = [];
    this.selectedColor = "orange";
    this.today = new Date();
  }

  searchMovie(movieQuery: string[]) {
    this.movieList = [];
    console.log(movieQuery);
    this.moviesService.getMovieList(movieQuery).subscribe(
      (result: MovieListResponse) => {
        if (result.Response)
          this.movieList = result.data.results;
        else
          Swal.fire('Demasiados resultados, intenta escribir más', '', 'error');
      },
    );
  }

  addFavoriteMovie(favoriteMovie: MovieInterface) {
    const alreadyAdded = this.favoriteShows.findIndex(
      (element) => element.id === favoriteMovie.id
    );
    if (alreadyAdded === -1) {
      favoriteMovie.registerDate = new Date();
      this.favoriteShows.push(favoriteMovie);
      Swal.fire('Added to favorites', '', 'success');
    }
    else {
      this.message = 'The movie: "' + favoriteMovie.title + '" has already been added.';
      Swal.fire(this.message, '', 'error');
    }
  }

  removeFavorite(index: number) {
    this.favoriteShows.splice(index, 1);
    Swal.fire('Content removed', '', 'success');
  }

  hasResults() {
    return this.movieList.length > 0;
  }

  hasFavoriteShow() {
    return this.favoriteShows.length > 0;
  }
}
