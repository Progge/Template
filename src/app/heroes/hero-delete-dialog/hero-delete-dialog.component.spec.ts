import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeleteDialogComponent } from './hero-delete-dialog.component';

describe('HeroDeleteDialogComponent', () => {
  let component: HeroDeleteDialogComponent;
  let fixture: ComponentFixture<HeroDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
