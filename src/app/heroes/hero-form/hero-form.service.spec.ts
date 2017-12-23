import { TestBed, inject } from '@angular/core/testing';

import { HeroFormService } from './hero-form.service';

describe('HeroFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroFormService]
    });
  });

  it('should be created', inject([HeroFormService], (service: HeroFormService) => {
    expect(service).toBeTruthy();
  }));
});
