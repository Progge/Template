import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable()
export class HeroFormService {

  apiKey= environment.googleMapsApiKey;
  mapsUrl= 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAlak1M86TXWOeI0Wlfv5IOD2xUcukXgsw

  constructor(private http: HttpClient) { }

  getAddress(lat: number, lng: number): any {
    return this.http.get<any>(this.mapsUrl + lat + ',' + lng + '&key=' + this.apiKey);
  }

}
