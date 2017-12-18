import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
import { LoginsModule } from './logins/logins.module';
import { AdsModule } from './ads/ads.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeroesModule,
    LoginsModule,
    AdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
