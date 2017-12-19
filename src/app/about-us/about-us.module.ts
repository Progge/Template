import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AboutUsComponent} from './about-us.component';
import {AboutUsService} from './shared/about-us.service';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    AboutUsComponent
  ],
  providers: [
    AboutUsService
  ]
})
export class AboutUsModule { }
