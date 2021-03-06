import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class SnackBarService {
  snackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();
  message: string;

  constructor(private snackBar: MatSnackBar) {
    this.snackBarConfig.duration = 3200;
  }

  showSnackBar(designType: string, messageType: string, message?: string) {
    this.setType(designType);
    this.setMessage(messageType, message);
    return this.snackBar.open(this.message, '', this.snackBarConfig);
  }

  setType(designType: string) {
    switch (designType) {
      case ('success'):
        this.snackBarConfig.panelClass = ['success-snackbar'];
        break;
      case ('error'):
        this.snackBarConfig.panelClass = ['error-snackbar'];
        break;
    }
  }

  setMessage(messageType: string, message?: string) {
    switch (messageType) {
      case ('custom'):
        this.message = message;
        break;
      case ('login'):
        this.message = 'You have successfully signed in.';
        break;
      case ('logout'):
        this.message = 'You have been successfully signed out.';
        break;
      case ('sign-up'):
        this.message = 'Your account has been successfully registered.';
        break;
      case ('auth'):
        this.message = 'You have to sign in to access that page.';
        break;
    }
  }
}
