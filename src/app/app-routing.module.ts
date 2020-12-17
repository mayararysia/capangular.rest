import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics/comics.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/comics', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'comics', component: ComicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
