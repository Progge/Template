import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import {MatCardModule, MatTabsModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeroesModule} from '../../heroes/heroes.module';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    HeroesModule
  ],
  declarations: [
    ProfilePageComponent,
    ProfileComponent,
    SettingsComponent,
    MyHeroesComponent,
  ]
})
export class ProfileModule { }
