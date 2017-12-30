import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './shared/user.service';
import { LoginModule } from './login/login.module';
import {ProfileModule} from './profile-page/profile-page.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    LoginModule,
    ProfileModule,
  ],
  declarations: [
    UserComponent,
  ],
  providers: [UserService]
})
export class UserModule { }
