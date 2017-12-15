import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  fillerContent = Array(30);
  get mode() { return ['over']; }
  constructor() { }

  ngOnInit() {
  }

}
