import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHeroesComponent } from './upload-heroes.component';

describe('UploadHeroesComponent', () => {
  let component: UploadHeroesComponent;
  let fixture: ComponentFixture<UploadHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
