import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { UploadHeroesComponent } from './upload-heroes/upload-heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-form', component: HeroFormComponent},
  { path: 'upload-heroes', component: UploadHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
