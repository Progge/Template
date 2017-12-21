import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
    ProfilePageComponent,
  ]
})
export class ProfileModule { }
