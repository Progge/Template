import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  @Input()
  name: String;

  constructor() { }

  ngOnInit() {
  }

}
