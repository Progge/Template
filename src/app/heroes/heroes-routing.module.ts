import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { UploadHeroesComponent } from './upload-heroes/upload-heroes.component';
import {HeroComponent} from './hero/hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-form/:id', component: HeroFormComponent},
  { path: 'upload-heroes', component: UploadHeroesComponent},
  {path: 'hero/:id', component: HeroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
