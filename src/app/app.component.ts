import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public movies: Array<Movie>;
  public tv_show: Array<Tv>;
  public books: Array<Book>;
  title = 'database';

  ngOnInit() {

  }
  Movie: Movie[] = [
    {
     title: 'Howl`\'`s Moving Castle',
     released_on: '2004',
     genre: ['Animation', 'Adventure', 'Family'],
     thumbnail: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwii5_fk5PrWAhWCxFQKHTN-AK8QjRwIBw&url=http%3A%2F%2Fwww.fandango.com%2Fhowlsmovingcastlecastleinthesky_185420%2Fmoviephotosposters&psig=AOvVaw0-9T3Gkeu9JmDyewAqjsZO&ust=1508436908027652',
     description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
     production_company: 'Studio Ghibli',
   },
   {
     title: 'She`\'`s The Man',
     released_on: '2006',
     genre: 'Comedy',
     thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0OTYyNzIzN15BMl5BanBnXkFtZTcwMjYwMzMzMQ@@._V1_.jpg',
     description: 'When her brother decides to ditch for a couple weeks, Viola heads over to his elite boarding school, disguised as him, and proceeds to fall for one of his soccer teammates, and soon learns she`\'`s not the only one with romantic troubles.',
     production_company: 'DreamWorks'
   }
  ];

}


export class Movie {
  title: string;
  released_on: string;
  genre: any;
  thumbnail: string;
  description: string;
  production_company: any;
}

export class Tv {
  title: string;
  released_on: string;
  genre: any;
  thumbnail: string;
  description: string;
}

export class Book {
  title: string;
  author: string;
  year_published: string;
  genre: any;
  thumbnail: string;
  description: string;

