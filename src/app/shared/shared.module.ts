import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarService} from './feedback/snackbar.service';

import { MatSnackBarModule } from '@angular/material';
import {AuthModule} from '../core/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    AuthModule,
  ],
  declarations: [],
  providers: [SnackBarService]
})
export class SharedModule { }
