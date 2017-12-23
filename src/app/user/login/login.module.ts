import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { LoginRoutingModule } from './login-routing.module';
import { MatTabsModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { FacebookComponent } from './facebook/facebook.component';
import { GoogleComponent } from './google/google.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    LoginRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    LoginComponent,
    FacebookComponent,
    GoogleComponent,
    EmailComponent,
    SignupComponent,
  ],
})
export class LoginModule { }
