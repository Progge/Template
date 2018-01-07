import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../shared/hero.model';
import {Router} from '@angular/router';
import {UserService} from '../../user/shared/user.service';
import {User} from '../../user/shared/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;
  author: User;
  currentUser: User;
  canEdit= false;

  constructor(private router: Router, private userService: UserService) { }

  goToHero(id) {
    this.router.navigate(['hero/' + id]);
  }

  ngOnInit(): void {
    Observable.zip(this.userService.getUserById(this.hero.authorUserId), this.userService.currentUser).subscribe(pair => {
      this.author = pair[0];
      this.currentUser = pair[1];
      if ((this.author && this.currentUser) && (this.author.uid === this.currentUser.uid)) {
        this.canEdit = true;
      }
    });

    // this.userService.getUserById(this.hero.authorUserId).subscribe(res => {
    //   this.author = res;
    // });
    // this.userService.currentUser.subscribe(user => {
    //   this.currentUser = user;
    // });
  }

}
