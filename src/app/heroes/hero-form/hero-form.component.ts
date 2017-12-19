import { Component, OnInit } from '@angular/core';
import {google} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  constructor() { }
  ngOnInit() {
    this.getUserLocation();
  }
  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  markerMoved(e) {
    console.log(e);
  }

}
