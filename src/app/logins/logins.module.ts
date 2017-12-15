import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginsComponent } from './logins.component';
// import { HeroService } from './shared/hero.service';
import { FacebookComponent } from './facebook/facebook.component';
import {LoginsRoutingModule} from './logins-routing.module';
import {CoreModule} from '../core/core.module';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { GmailComponent } from './gmail/gmail.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LoginsRoutingModule,
    MatTabsModule,
    MatCardModule,
  ],
  declarations: [
    LoginsComponent,
    FacebookComponent,
    GmailComponent,
    EmailComponent,
  ],
  providers: [
  ]
})
export class LoginsModule { }
