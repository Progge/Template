import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAddressComponent } from './maps-address.component';

describe('MapsAddressComponent', () => {
  let component: MapsAddressComponent;
  let fixture: ComponentFixture<MapsAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
