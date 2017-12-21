import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminGuard} from './guards/admin.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService, AuthGuard, AdminGuard],
})
export class AuthModule { }
