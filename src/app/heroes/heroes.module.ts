import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './shared/hero.service';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatProgressBarModule,
} from '@angular/material';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';
import { UploadHeroesComponent } from './upload-heroes/upload-heroes.component';
import {HeroFormService} from './hero-form/hero-form.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    FlexLayoutModule,
    HeroesRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeroesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroListComponent,
    HeroCardComponent,
    HeroFormComponent,
    UploadHeroesComponent
  ],
  providers: [
    HeroService,
    HeroFormService
  ]
})
export class HeroesModule { }
