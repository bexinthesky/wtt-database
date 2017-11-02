import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../services/movie.service';

@Component({
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  public movie: Movie;
  public movieId: string;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.movie = this.movieService.getMovieById(this.movieId);
  }

}
