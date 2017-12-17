import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {
  MatIconModule, MatProgressSpinnerModule, MatToolbarModule, MatCardModule, MatTabsModule,
  MatSidenavModule, MatCheckboxModule, MatMenuModule, MatButtonModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FirebaseModule } from './firebase/firebase.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    FirebaseModule,
  ],
  declarations: [NavComponent, SpinnerComponent],
  exports: [NavComponent, SpinnerComponent]
})
export class CoreModule { }
