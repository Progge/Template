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
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroListComponent,
    AddHeroComponent,
    HeroCardComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
