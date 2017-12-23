import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarService} from './feedback/snackbar.service';

<<<<<<< HEAD
import {MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule} from '@angular/material';
import {AuthModule} from './auth/auth.module';
import { MapsAddressComponent } from './maps-address/maps-address.component';
import {MapsAddressService} from './maps-address/maps-address.service';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';
=======
import { MatSnackBarModule } from '@angular/material';
import {AuthModule} from '../core/auth/auth.module';
>>>>>>> 1f55b79b7632e461780401cc9357804184cded43

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
