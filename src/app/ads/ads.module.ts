import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdsComponent } from './ads.component';
import { AdCardComponent } from './ad-card/ad-card.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [AdListComponent, AdsComponent, AdCardComponent],
  exports: [AdsComponent]
})
export class AdsModule { }
