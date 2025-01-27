import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Models/movie.model';
@Component({
 selector: 'app-movie-list',
 templateUrl: './movie-list.component.html',
 styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
 movies: Movie[] = [];
 constructor(private movieService: MovieService, private router: Router) {}
 ngOnInit(): void {
 this.movieService.getMovies().subscribe((data) => {
 this.movies = data;
 });
 }
 deleteMovie(id: any): void {
 this.movieService.deleteMovie(id).subscribe(() => {
 this.movies = this.movies.filter(movie => movie.id !== id);
 });
 }
 editMovie(id: number): void {
 this.router.navigate([`/edit/${id}`]);
 }
}
