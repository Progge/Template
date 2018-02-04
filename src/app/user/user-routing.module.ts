import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserComponent } from './user.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'sign-in',
        component: LoginComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
