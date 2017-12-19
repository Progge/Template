import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginsComponent } from './logins/logins.component';
import {AdsComponent} from './ads/ads.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: LoginsComponent,
  },
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
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
