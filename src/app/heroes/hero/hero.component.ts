import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../shared/hero.model';
import {HeroService} from '../shared/hero.service';
import {UserService} from '../../user/shared/user.service';
import {HeroDeleteDialogComponent} from '../hero-delete-dialog/hero-delete-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  id: string;
  hero: Hero;
  canEdit= false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.heroService.getHero(this.id).subscribe(hero => {
      if (hero) {
        this.hero = hero;
        this.hero.id = this.id;
      }
      this.heroService.canEditHero(hero).subscribe(canEdit => {
        this.canEdit = canEdit;
      });
    });
  }

  onDeleteClick() {
    const dialogRef = this.dialog.open(HeroDeleteDialogComponent, {
      data: { hero: this.hero }
    });
    dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.router.navigate(['heroes']);
      }
    });
  }
  onEditClick() {
    this.router.navigate(['hero-form/' + this.id]);
  }

}
