import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieInterface } from '@app-models/movie.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  
  @Input() movieList: MovieInterface[];
  @Output() addFavoriteMovieEmitter = new EventEmitter<MovieInterface>();

  dataSource: MovieInterface[];
  movieForm: FormGroup;
  favoriteToAdd: MovieInterface;

  constructor(private fb: FormBuilder) {
    this.dataSource = [];
    this.movieList = [];
    this.favoriteToAdd = {} as MovieInterface;
    this.movieForm = this.fb.group({
      movies: this.fb.array([]),
    });
  }
  
  ngOnInit(): void {
    this.dataSource = this.movieList;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieList'].currentValue) {
      this.dataSource = changes['movieList'].currentValue;
      this.getMovieList.clear();
      this.dataSource.forEach((element) => {
        this.getMovieList.push(this.addMovie(element));
      });
    }
  }

  get getMovieList() {
    return this.movieForm.get("movies") as FormArray;
  }

  addMovie(movieData: MovieInterface) {
    return this.fb.group({
      title: [movieData.title],
      type: [movieData.type],
      year: [movieData.year],
      comment: ['']
    });
  }

  addFavoriteMovie(index: number) {
    this.favoriteToAdd = {
      id: this.dataSource[index].id,
      poster: this.dataSource[index].poster,
      title: this.getMovieList.at(index).value.title,
      type: this.getMovieList.at(index).value.type,
      year: this.getMovieList.at(index).value.year,
      comment: this.getMovieList.at(index).value.comment
    };
    this.addFavoriteMovieEmitter.emit(this.favoriteToAdd);
  }
}
