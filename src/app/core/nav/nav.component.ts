import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../firebase/auth/firebase-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
  }

}
