import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {LoginsComponent} from './logins/logins.component';
import {NavComponent} from './core/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
  },
  {
    path: 'login',
    component: LoginsComponent,
  },
  ];


const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
