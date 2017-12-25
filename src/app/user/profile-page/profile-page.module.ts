import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import {MatCardModule, MatTabsModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SettingsComponent } from './settings/settings.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
  ],
  declarations: [
    ProfilePageComponent,
    ProfileComponent,
    HeroesComponent,
    SettingsComponent,
  ]
})
export class ProfileModule { }
