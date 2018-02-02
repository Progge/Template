import { Component } from '@angular/core';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';
import {MatSlideToggleChange} from '@angular/material';
import {NgxPicaService} from 'ngx-pica';
import {AspectRatioOptions} from 'ngx-pica/src/ngx-pica-resize-options.interface';

@Component({
  selector: 'app-upload-heroes',
  templateUrl: './upload-heroes.component.html',
  styleUrls: ['./upload-heroes.component.css']
})
export class UploadHeroesComponent {

  selectedFiles: FileList;
  doneFiles = [];
  progresses: {name: string, percentage: number}[];
  maxWidth = 640;
  maxHeight = 640;
  resizeInProgress = false;
  enableResize = false;

  constructor(private uploadService: FirebaseStorageService, private ngxPicaService: NgxPicaService) { }

  selectFiles(event) {
    this.selectedFiles = event.target.files;
    this.progresses = [];
    Array.prototype.forEach.call(this.selectedFiles, (file) => {
      const progress = {name: file.name, percentage: 0};
      this.progresses.push(progress);
    });

    // If pica resizing is enabeled
    if (this.enableResize) {
      this.resizeImages();
    } else {
      this.doneFiles = Array.from(this.selectedFiles);
    }
  }

  resizeImages() {
    const options = <AspectRatioOptions> {keepAspectRatio: true, forceDimensions: true} ;
    this.resizeInProgress = true;
    this.ngxPicaService.resizeImages(Array.from(this.selectedFiles), this.maxWidth, this.maxHeight
      ).subscribe((result) => {
      // all good, result is a file
      console.log(result);
      this.doneFiles.push(result);
      if (this.doneFiles.length === this.selectedFiles.length) {
        this.resizeInProgress = false;
      }

    }, error => {
      // something went wrong
      console.error(error);
    });

  }

  upload() {
    Array.prototype.forEach.call(this.doneFiles, (file, index) => {
      const upload = this.uploadService.pushFileToStorage(file, file.name, this.progresses[index]);
      console.log(upload);
    });
  }

  onEnableResizeToggle($event: MatSlideToggleChange) {
    this.enableResize = $event.checked;
  }
}
