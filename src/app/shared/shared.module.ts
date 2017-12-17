import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarService} from './feedback/snackbar.service';

import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  declarations: [],
  providers: [SnackBarService]
})
export class SharedModule { }
