import { Component } from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
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
  constructor() {
    this.movieList = [];
    this.favoriteShows = [];
    this.selectedColor = "orange";
    this.today = new Date();
  }

}
