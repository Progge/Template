import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './about-us.component';
import { AboutUsService } from './shared/about-us.service';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import {MatButtonModule, MatIconModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    AboutUsComponent,
    EmployeeCardComponent
  ],
  providers: [
    AboutUsService
  ]
})
export class AboutUsModule { }
