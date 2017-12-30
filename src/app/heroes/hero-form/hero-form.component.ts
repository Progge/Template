import {Component, ElementRef, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {HeroFormService} from './hero-form.service';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {CropperSettings, ImageCropperComponent} from 'ng2-img-cropper';
import {Hero} from '../shared/hero.model';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';
import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  data: any;
  cropperSettings: CropperSettings;
  model = new Hero();
  format: any;
  public fileIsOver = false;
  exampleOptions= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imgFolder = 'images';

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  /*Provides a base 64 string*/
  fileDropOptions = {
    readAs: 'DataURL'
  };

  constructor(private uploadService: FirebaseStorageService, private heroService: HeroService) {
    /*Settings for the image cropper*/
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.preserveSize = true;
    this.cropperSettings.cropOnResize = true;
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }

  ngOnInit(): void {
  }

  selectFiles(e) {
    this.fileChangeListener(e.target.files[0]);
  }

  public fileOver(fileIsOver: boolean): void {
    this.fileIsOver = fileIsOver;
  }

  public onFileDrop(base64String: string): void {
    const image = new Image();
    image.src = base64String;
    this.cropper.setImage(image);
  }


  fileChangeListener(file: File) {
    const image: any = new Image();
    this.format = file.name.split('.')[1];
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
  }

  onSubmit() {
    console.log(this.data);
    const upload = this.uploadService.uploadBase64Image(this.data.image, this.imgFolder,  this.model.name);
    upload.then(res => {
      this.model.image = res.downloadURL;
      this.heroService.createHero(this.model);
    });
  }
}
