import { Component, OnInit } from '@angular/core';
import {google} from '@agm/core/services/google-maps-types';
import {HeroFormService} from './hero-form.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  addressObs;
  address;


  constructor(private heroFormService: HeroFormService) { }
  ngOnInit() {
    this.getUserLocation();
  }
  // Get HTML5 geolocation
  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.loadAddress();
      });
    }
  }

  markerMoved(e) {
    console.log(e);
    this.lat = e.coords.lat;
    this.lng = e.coords.lng;
    this.loadAddress();
  }

  loadAddress() {
    this.addressObs = this.heroFormService.getAddress(this.lat, this.lng);
    this.addressObs.subscribe(res => {
      this.address = res.results[0].formatted_address;
    });
  }

}
