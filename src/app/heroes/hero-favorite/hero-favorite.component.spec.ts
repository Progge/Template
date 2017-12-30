import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFavoriteComponent } from './hero-favorite.component';

describe('HeroFavoriteComponent', () => {
  let component: HeroFavoriteComponent;
  let fixture: ComponentFixture<HeroFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
