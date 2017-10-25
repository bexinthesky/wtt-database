import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutingModule } from './app.routes';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MovieService } from './services/movie.service';

//Custom
import { SearchByPipe } from './pipes/search-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MovieListComponent,
    ItemDetailComponent,
    SearchByPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ROUTING MODULE SHOULD BE LAST
    RoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
