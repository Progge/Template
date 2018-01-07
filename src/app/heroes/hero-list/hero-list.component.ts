import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from '../shared/hero.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../shared/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @Input()
  heroes: Observable<Hero[]>;

  constructor() { }

  ngOnInit() {
  }
}
