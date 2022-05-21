import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent {
  @Input() favorites: MovieInterface[];
  @Output() removeFavoriteEmitter = new EventEmitter<number>();
  constructor() {
    this.favorites = [];
  }

  removeFavorite(index: number) {Swal.fire({
    title: 'Are you sure you want to remove this from favorites?',
    showDenyButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeFavoriteEmitter.emit(index);
      }
    });
  }
}
