import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {HeroFormService} from './hero-form.service';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';

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

  // Get the inputfield to become the Maps autocomplete field
  @ViewChild('search') public searchElement: ElementRef;

  constructor(private heroFormService: HeroFormService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.getUserLocation();
    this.loadMapsAutocomplete();

  }
  // Get HTML5 geolocation
  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.loadAddressFromCords();
      });
    }
  }
  // Update lat and lng after marker being released
  markerMoved(e): void {
    console.log(e);
    this.lat = e.coords.lat;
    this.lng = e.coords.lng;
    this.loadAddressFromCords();
  }

  // Get address from cords via google API
  loadAddressFromCords(): void {
    this.addressObs = this.heroFormService.getAddress(this.lat, this.lng);
    this.addressObs.subscribe(res => {
      this.address = res.results[0].formatted_address;
    });
  }

  // Get cords from address via google API
  loadCordsFromAddress() {

  }

  // Loading Google maps autocomplete input field
  loadMapsAutocomplete() {
    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address'] });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.address = place.formatted_address;
            if (place.geometry === undefined || place.geometry === null ) {
              return;
            }
          });
        });
      }
    );
  }
}
