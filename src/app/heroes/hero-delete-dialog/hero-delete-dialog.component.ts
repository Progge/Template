import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HeroService} from '../shared/hero.service';
import {Hero} from '../shared/hero.model';

@Component({
  selector: 'app-hero-delete-dialog',
  templateUrl: './hero-delete-dialog.component.html',
  styleUrls: ['./hero-delete-dialog.component.css']
})
export class HeroDeleteDialogComponent implements OnInit {
  isDeleting= false;

  constructor(
    public dialogRef: MatDialogRef<HeroDeleteDialogComponent>,
    private heroService: HeroService,
    @Inject(MAT_DIALOG_DATA) public data: {hero: Hero}) {}

  ngOnInit() {
  }

  deleteHero() {
    this.isDeleting = true;
    this.heroService.deleteHero(this.data.hero.id).then( res => {
        this.dialogRef.close(true);
    });
  }

  noDelete() {
    this.dialogRef.close(false);
  }
}
