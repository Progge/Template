import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { UserService } from './shared/user.service';
import { LoginModule } from './login/login.module';
import {NgxPhoneMaskModule} from 'ngx-phone-mask';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    UserRoutingModule,
    NgxPhoneMaskModule,
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
  ],
  providers: [UserService]
})
export class UserModule { }
