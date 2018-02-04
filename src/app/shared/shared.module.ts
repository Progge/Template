import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarService} from './feedback/snackbar.service';

import {MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule} from '@angular/material';
import { MapsAddressComponent } from './maps-address/maps-address.component';
import {MapsAddressService} from './maps-address/maps-address.service';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';
import {AuthModule} from '../core/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
      libraries: ['places']
    }),
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    AuthModule,
  ],
  declarations: [MapsAddressComponent],
  providers: [SnackBarService, MapsAddressService],
  exports: [MapsAddressComponent]
})
export class SharedModule { }
