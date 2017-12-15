import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginsComponent } from './logins.component';
// import { HeroService } from './shared/hero.service';
import { FacebookComponent } from './facebook/facebook.component';
import {LoginsRoutingModule} from './logins-routing.module';
import {CoreModule} from '../core/core.module';
import { MatTabsModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { GoogleComponent } from './google/google.component';
import { EmailComponent } from './email/email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    LoginsRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    LoginsComponent,
    FacebookComponent,
    GoogleComponent,
    EmailComponent,
    SignupComponent,
  ],
  providers: [
  ]
})
export class LoginsModule { }
