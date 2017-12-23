import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MapsAddressService {

  apiKey= environment.googleMapsApiKey;
  mapsUrl= 'https://maps.googleapis.com/maps/api/geocode/json?';
  // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAlak1M86TXWOeI0Wlfv5IOD2xUcukXgsw

  constructor(private http: HttpClient) { }

  getAddress(lat: number, lng: number): Observable<any> {
    return this.http.get<any>(this.mapsUrl + 'latlng=' + lat + ',' + lng + '&key=' + this.apiKey);
  }

  getCords(formattedAddress: String): Observable<any> {
    return this.http.get<any>(this.mapsUrl + 'address=' + formattedAddress + '&key=' + this.apiKey);


}
