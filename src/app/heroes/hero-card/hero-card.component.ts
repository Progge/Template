import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../shared/hero.model';
import {Router} from '@angular/router';
import {UserService} from '../../user/shared/user.service';
import {User} from '../../user/shared/user.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit{
  @Input() hero: Hero;
  author: User;

  constructor(private router: Router, private userService: UserService) { }

  goToHero(id) {
    this.router.navigate(['hero/' + id]);
  }

  ngOnInit(): void {
    this.userService.getUserById(this.hero.authorUserId).subscribe(res => {
      this.author = res;
    });
  }

}
