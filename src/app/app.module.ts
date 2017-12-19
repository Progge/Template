import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
import { LoginsModule } from './logins/logins.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeroesModule,
    LoginsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
