import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../shared/hero.model';
import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  id: string;
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.heroService.getHero(this.id).subscribe(hero => {
      this.hero = hero;
    });
  }

}
