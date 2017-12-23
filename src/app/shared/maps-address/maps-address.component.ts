import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {MapsAddressService} from './maps-address.service';


@Component({
  selector: 'app-maps-address',
  templateUrl: './maps-address.component.html',
  styleUrls: ['./maps-address.component.css']
})
export class MapsAddressComponent implements OnInit {

  lat = 0;
  lng = 0;
  addressObs;
  formattedAddress: string;
  @Output() addressUpdated = new EventEmitter();

  // Get the inputfield to become the Maps autocomplete field
  @ViewChild('search') public searchElement: ElementRef;

  constructor(private heroFormService: MapsAddressService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

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
      this.formattedAddress = res.results[0].formatted_address;
    });
  }

  // Get cords from address via google API
  // loadCordsFromAddress(): void {
  //   this.heroFormService.getCords(this.formattedAddress).subscribe(res => {
  //     this.lng = res.results[0].geometry.location.lng;
  //     this.lat = res.results[0].geometry.location.lat;
  //     console.log(res);
  //   });
  // }

  // Loading Google maps autocomplete input field
  loadMapsAutocomplete() {
    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address'] });

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            // Update Address
            this.formattedAddress = place.formatted_address;
            // Update Cords
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();

            if (place.geometry === undefined || place.geometry === null ) {
              return;
            }
          });
        });
      }
    );
  }
}


