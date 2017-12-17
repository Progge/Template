import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent {
  selectedTab = 1;
  constructor() { }

  swapTab(signUpSuccess) {
    if (signUpSuccess) {
      this.selectedTab = 0;
    }
  }
}
