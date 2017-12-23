import { TestBed, inject } from '@angular/core/testing';

import { MapsAddressService } from './maps-address.service';

describe('MapsAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapsAddressService]
    });
  });

  it('should be created', inject([MapsAddressService], (service: MapsAddressService) => {
    expect(service).toBeTruthy();
  }));
});
