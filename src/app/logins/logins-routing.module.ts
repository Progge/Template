import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from './logins.component';
import { HeroesComponent} from '../heroes/heroes.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginsComponent,
  },
  {
    path: 'change-pass',
    component: HeroesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginsRoutingModule { }
