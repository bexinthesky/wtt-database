import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: ItemDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
