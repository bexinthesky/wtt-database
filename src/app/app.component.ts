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


  this.movies = [
    {
     title: 'Howl\'s Moving Castle',
     released_on: '2004',
     genre: ['Animation', ' Adventure', ' Family'],
     thumbnail: 'http://images4.fanpop.com/image/photos/22800000/Howl-s-Moving-Castle-Poster-studio-ghibli-22835992-356-500.jpg',
     description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
     actors: ['Christian Bale', ' Jean Simmons', ' Lauren Bacall', ' Blythe Danner', ' Billy Crystal', ' Emily Mortimer', ' Chieko Baishô', ' Takuya Kimura', ' Akihiro Miwa', ' Tatsuya Gashûin', ' Ryûnosuke Kamiki'],
     production_company: ['Studio Ghibli', ' Tokuma Shoten', ' Nippon Television Network', ' Dentsu', 'Mitsubishi', ' Tohokushinsha Film Corporation', ' Disney'],
     run_time: '119 Minutes',
     rating: 'PG'
   },
   {
     title: 'She\'s The Man',
     released_on: '2006',
     genre: ['Comedy', ' Romance', 'Sport'],
     thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0OTYyNzIzN15BMl5BanBnXkFtZTcwMjYwMzMzMQ@@._V1_.jpg',
     description: 'When her brother decides to ditch for a couple weeks, Viola heads over to his elite boarding school, disguised as him, and proceeds to fall for one of his soccer teammates, and soon learns she\'s not the only one with romantic troubles.',
     actors: ['Amanda Bynes', ' Channing Tatum', 'Laura Ramsey', ' Vinnie Jones', ' Robert Hoffman', ' Alex Breckenridge', ' Julie Hagerty', ' David Cross'],
     production_company: ['DreamWorks', ' Lakeshore Entertainment'],
     run_time: '105 Minutes',
     rating: 'PG-13'
   },
   {
     title: 'How to Deal',
     released_on: '2003',
     genre: ['Comedy', ' Drama', ' Romance'],
     thumbnail: '',
     description: 'For teenager Halley, love seems like an alien concept. Her mother, Lydia, and father, Len, are divorced. Lydia doesn\'t date, and Len is now seeing a younger woman. Halley\'s sister, Ashley, is about to get married and doesn\'t realize that her fiancé is not the man of her dreams. But, when Halley meets edgy Macon, she learns what love is really all about.',
     actors: ['Mandy Moore', ' Allison Janney', ' Trent Ford', ' Alexandra Holden', ' Dylan Baker', ' Peter Gallagher'],
     production_company: ['New Line Cinema', ' Focus Features'],
     run_time: '101 Minutes',
     rating: 'PG-13'
   },
   {
     title: 'Digimon: The Movie',
     released_on: '2000',
     genre: ['Animation', ' Action', ' Adventure'],
     thumbnail: '',
     actors: ['Lara Jill Miller', ' Joshua Seth', ' Bob Papenbrook', ' Jeff Nimoy', ' Colleen O\'Shaughnessey', ' Philece Sampler', ' Mona Marshall', ' Michael Lindsay', ' Michael Reisz', ' Wendee Lee', ' Doug Erholtz', ' Bob Glouberman', ' Brian Donovan'],
     description: '1. The Digidestined-kids chosen to save the digital world-come face-to-face with their first Digimon. 2. When a powerful new internet Digimon hatches and begins to consume data at an alarming rate, the Digidestined must put an end to the destruction before the damage becomes irreversable and worldwide communication halts forever. 3. As computer-based missiles are launched, and a wayward Digimon kidnaps the Digidestined, only the combined efforts of a worldwide network of kids and a new group of "Digidestined" can rescue the others and stop global disaster.',
     production_company: ['Saban Entertainment', ' Toei Animation Company', ' Fox Kids'],
     run_time: '83 Minutes',
     rating: 'PG'
   },
   {
     title: 'Saved',
     released_on: '2004',
     genre: ['Comedy', ' Drama'],
     thumbnail: '',
     actors: ['Jena Malone', ' Mandy Moore', ' Patrick Fugit', ' Macaulay Culkin', ' Eva Amurri Martino', ' Mary-Louise Parker'],
     description: 'When a girl attending a Christian high school becomes pregnant, she finds herself ostracized and demonized, as all of her former friends turn on her.',
     production_company: ['United Artists', ' Single Cell Pictures', ' Infinity Media'],
     run_time: '1 Hour 32 Minutes',
     rating: 'PG-13'
   },
   {
     title: 'Kill Bill: Vol. 1'
   },
   {
     title: 'Kill Bill: Vol. 2'
   },
   //little mermaid, beauty & the beast x 2, juno, a cinderella story, the princess bride, easy a, pride & prejudice, guardians of the galaxy, marvel, star wars, house bunny, atomic blonde, penelope
   //tv pride and prejudice, sailor moon, 7 deadly sins, durarara!, dr who, star trek, digimon, bones, castle, gg, jessica jones, alien show tbs, that 70's show, lizzie mcguire,
  ];
}
}


export class Movie {
  title: string;
  released_on: string;
  genre: any;
  thumbnail: string;
  description: any;
  actors: any;
  production_company: any;
  run_time: string;
  rating: string;
  director: string;
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

