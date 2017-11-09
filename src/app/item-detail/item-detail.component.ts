import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  public movie: Movie;
  public movieId: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(response => {
      this.movieId = parseInt(response.id);
      console.log(response.id);
      this.movie = this.movieService.getMovieById(this.movieId);
    });

  }

}

// public getMovieById(id: number): Movie {
//   this.movieList.forEach(movie => {
//     if (movie.id === id) { this.movie = movie; }
//   });

//   return this.movie;
// tslint:disable-next-line:eofline
// }