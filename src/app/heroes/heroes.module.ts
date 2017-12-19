import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './shared/hero.service';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule,
  MatSlideToggleModule
} from '@angular/material';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    FlexLayoutModule,
    HeroesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroListComponent,
    AddHeroComponent,
    HeroCardComponent,
    HeroFormComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
