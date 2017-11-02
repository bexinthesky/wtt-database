import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public movies: Array<Movie>;
  public tv_show: Array<Tv>;
  public books: Array<Book>;
  title = 'database';

  constructor() { }

  ngOnInit() {

    

   this.tv_show = [
     {
      title: 'Pride and Prejudice',
      released_on: '1995',
      genre: [
        'Drama',
        'Romance',
      ],
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg',
      description: 'Jane Austen\'s classic novel about the prejudice that occurred between the 19th century classes and the pride which would keep lovers apart.',
      actors: [
        'Jennifer Ehle',
        'Colin Firth',
        'Susannah Harker',
        'Julia Sawalha',
        'Alison Steadman',
        'Benjamin Whitrow',
        'Crispin Bonham-Carter',
        'Polly Maberly',
        'Lucy Briers',
        'Anna Chancellor',
        'Anna Chancellor',
        'Adrian Lukis',
        'David Bamber',
        'Lucy Scott',
      ],
      production_companies: [
        'British Broadcasting Corporation',
        'Chestermead',
      ],
      network: 'BBC',
      writing_credits: [
        'Jane Austen',
        'Andrew Davies',
      ],
    },
    // {
    //   title: '',
    //   released_on: '',
    //   genre: [],
    //   thumbnail: '',
    //   description: '',
    //   actors: [],
    //   production_companies: [],
    //   network: [],
    //   writing_credits: [],
    // },
    // {
    //   title: '',
    //   released_on: '',
    //   genre: [],
    //   thumbnail: '',
    //   description: '',
    //   actors: [],
    //   production_companies: [],
    //   network: [],
    //   writing_credits: [],
    // },
    // {
    //   title: '',
    //   released_on: '',
    //   genre: [],
    //   thumbnail: '',
    //   description: '',
    //   actors: [],
    //   production_companies: [],
    //   network: [],
    //   writing_credits: [],
    // },
    // {
    //   title: '',
    //   released_on: '',
    //   genre: [],
    //   thumbnail: '',
    //   description: '',
    //   actors: [],
    //   production_companies: [],
    //   network: [],
    //   writing_credits: [],
    // },
    // {
    //   title: '',
    //   released_on: '',
    //   genre: [],
    //   thumbnail: '',
    //   description: '',
    //   actors: [],
    //   production_companies: [],
    //   network: [],
    //   writing_credits: [],
    // },
    // {
    //   title: '',
    //   released_on: '',
    //   genre: [],
    //   thumbnail: '',
    //   description: '',
    //   actors: [],
    //   production_companies: [],
    //   network: [],
    //   writing_credits: [],
    // },
   ];

  }
}

export class Tv {
  title: string;
  released_on: string;
  genre: any;
  thumbnail: string;
  description: string;
  actors: any;
  production_companies: any;
  network: any;
  writing_credits: any;
}

export class Book {
  title: string;
  author: string;
  year_published: string;
  subject: any;
  thumbnail: string;
  description: string;
}
