import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatIconModule, MatProgressSpinnerModule, MatToolbarModule, MatCardModule, MatTabsModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
  ],
  declarations: [NavComponent, SpinnerComponent],
  exports: [NavComponent, SpinnerComponent]
})
export class CoreModule { }