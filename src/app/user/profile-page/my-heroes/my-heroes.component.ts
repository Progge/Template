import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from '../../../heroes/shared/hero.service';
import {User} from '../../shared/user.model';
import {Hero} from '../../../heroes/shared/hero.model';
import {UserService} from '../../shared/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {

  currentUser: User;

  heroes: Observable<Hero[]>;

  constructor(private heroService: HeroService, private userService: UserService ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.heroes = this.heroService.getHeroesByUserId(this.currentUser.uid);
    });

  }

}
