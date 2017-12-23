import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {HeroFormService} from './hero-form.service';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {CropperSettings} from 'ng2-img-cropper';
import {Hero} from '../shared/hero.model';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  data: any;
  cropperSettings: CropperSettings;
  model: Hero= new Hero();
  constructor(private uploadService: FirebaseStorageService) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.cropOnResize = true;

    this.data = {};

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.data);
    const upload = this.uploadService.pushFileToStorage(this.data.image, 'pick', 100);
    console.log(upload);
  }
}
