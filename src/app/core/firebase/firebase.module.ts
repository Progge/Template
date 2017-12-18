import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { FirebaseAuthService } from './auth/firebase-auth.service';
import { FirebaseStorageService } from './storage/firebase-storage.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  declarations: [],
  exports: [],
  providers: [FirebaseAuthService, FirebaseStorageService],
})
export class FirebaseModule { }
