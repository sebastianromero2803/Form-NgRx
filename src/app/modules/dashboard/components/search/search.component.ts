import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IContentType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchMovieEmitter = new EventEmitter<string[]>();
  
  movieForm: FormGroup;
  options: IContentType[] =  [
    {value: 'movie', viewValue: 'movies'},
    {value: 'series', viewValue: 'series'},
    {value: 'episode', viewValue: 'episodes'},
  ]

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      option: ['', Validators.required],
      title: ["", Validators.required],
      year: [{value: '', disabled: true}, [Validators.required, , Validators.minLength(4)]],
    });
  }

  get getTitle() {
    return this.movieForm.get("title");
  }

  get getOption() {
    return this.movieForm.get("option");
  }

  get getYear() {
    return this.movieForm.get("year");
  }

  isDisabled() {
    if(this.getOption?.value == 'series')
      this.movieForm.controls['year'].enable();
    else
      this.movieForm.controls['year'].disable();
  }

  searchMovie() {
    this.searchMovieEmitter.emit([this.getTitle!.value, this.getOption?.value, this.getYear?.value]);
  }

}
