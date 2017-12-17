import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarRef} from '@angular/material';

@Injectable()
export class SnackBarService {
  errorSnackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();
  successSnackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();

  constructor(private snackBar: MatSnackBar) {
    this.errorSnackBarConfig.panelClass = ['error-snackbar'];
    this.errorSnackBarConfig.duration = 3000;
    this.successSnackBarConfig.panelClass = ['success-snackbar'];
    this.successSnackBarConfig.duration = 3000;
  }

  showErrorSnackBar(message: string): MatSnackBarRef<any> {
    return this.snackBar.open(message, 'Stäng', this.errorSnackBarConfig);
  }

  showSuccessSnackBar(message: string): MatSnackBarRef<any> {
    return this.snackBar.open(message, 'Stäng', this.successSnackBarConfig);
  }
}
