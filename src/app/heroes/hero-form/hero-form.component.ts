import {Component, ElementRef, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {HeroFormService} from './hero-form.service';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {CropperSettings, ImageCropperComponent} from 'ng2-img-cropper';
import {Hero} from '../shared/hero.model';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';
import {HeroService} from '../shared/hero.service';
import {UserService} from '../../user/shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackBarService} from '../../shared/feedback/snackbar.service';
import {User} from '../../user/shared/user.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  ImageObject: any;
  cropperSettings: CropperSettings;
  model = <Hero>{};
  imgFormatName: string;
  currentUser: User;
  public fileIsOver = false;
  exampleOptions= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imgFolder = 'images';

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  /*Provides a base 64 string*/
  fileDropOptions = {
    readAs: 'DataURL'
  };

  constructor(private uploadService: FirebaseStorageService, private heroService: HeroService, private userService: UserService,
              private router: Router, private snackBarService: SnackBarService, private route: ActivatedRoute
  ) {
    /*Settings for the image cropper*/
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.preserveSize = true;
    /*
      Force resolution with Instagram like settings 640x640 or 1080x1080
      this.cropperSettings.croppedHeight = 640;
      this.cropperSettings.croppedWidth = 640;*/
    this.cropperSettings.cropOnResize = true;
    this.cropperSettings.noFileInput = true;
    this.ImageObject = {};
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.heroService.getHero(id).subscribe(hero => {
      this.model = hero;
      // this.ImageObject.image = hero.image;
      // const image = new Image();
      // image.crossOrigin = 'Anonymous';
      // image.src = hero.image;
      // this.cropper.setImage(image);
      // console.log(image);
      this.uploadService.getImg(hero.image).then(img => {
        // console.log(img);
        this.onFileDrop(img);
      });
    });
    if (this.userService.isLoggedIn) {
      this.userService.user.subscribe(user => {
        this.model.authorUserId = user.uid;
        this.currentUser = user;
      });
    }
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
    this.imgFormatName = file.name.split('.')[1];
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
  }

  onSubmit() {
    const upload = this.uploadService.uploadBase64Image(this.ImageObject.image, this.imgFolder,  this.model.name);
    upload.then(res => {
      this.model.image = res.downloadURL;
      this.createHero();
    });
  }

  private createHero() {
    this.heroService.createHero(this.model).then(res => {
      this.snackBarService.showSnackBar('success', 'custom', 'Hero created!');
      this.router.navigate(['heroes']);
    });
  }


}
