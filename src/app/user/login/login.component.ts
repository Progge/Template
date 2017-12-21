import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedTab = 0;
  constructor() { }

  swapTab(signUpSuccess) {
    if (signUpSuccess) {
      this.selectedTab = 0;
    }
  }
}
