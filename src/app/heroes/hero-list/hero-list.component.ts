import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {HeroService} from '../shared/hero.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../shared/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  @Input()
  heroes: Observable<Hero[]>;

  constructor() { }

}

