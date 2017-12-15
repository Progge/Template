import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginsComponent } from './logins.component';
// import { HeroService } from './shared/hero.service';
import { FacebookComponent } from './facebook/facebook.component';
import {LoginsRoutingModule} from './logins-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginsRoutingModule
  ],
  declarations: [
    LoginsComponent,
    FacebookComponent,
  ],
  providers: [
  ]
})
export class LoginsModule { }
