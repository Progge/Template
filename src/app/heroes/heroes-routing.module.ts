import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {AddHeroComponent} from './add-hero/add-hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'add-hero', component: AddHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
