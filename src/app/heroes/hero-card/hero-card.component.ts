import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../shared/hero.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {

  @Input() hero: Hero;

  constructor(private router: Router) { }

  goToHero(id) {
    this.router.navigate(['hero/' + id]);
  }
}
