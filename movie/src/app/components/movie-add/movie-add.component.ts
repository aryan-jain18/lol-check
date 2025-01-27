import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
@Component({
 selector: 'app-movie-add',
 templateUrl: './movie-add.component.html',
 styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent {
 movieForm: FormGroup;
 constructor(
 private fb: FormBuilder,
 private movieService: MovieService,
 private router: Router
 ) {
 this.movieForm = this.fb.group({
 title: ['', Validators.required],
 director: ['', Validators.required],
 year: [null, [Validators.required, Validators.min(1900), Validators.max(new 
Date().getFullYear())]]
 });
 }
 addMovie(): void {
  if (this.movieForm.valid) {
  this.movieService.createMovie(this.movieForm.value).subscribe(() => {
  this.router.navigate(['/']);
  });
  }
  }
 }
