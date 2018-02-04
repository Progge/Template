import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
import { AboutUsModule } from './about-us/about-us.module';
import {environment} from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';



import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    CoreModule,
    HeroesModule,
    AboutUsModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
