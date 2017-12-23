import { Component, OnInit } from '@angular/core';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';

@Component({
  selector: 'app-upload-heroes',
  templateUrl: './upload-heroes.component.html',
  styleUrls: ['./upload-heroes.component.css']
})
export class UploadHeroesComponent {

  selectedFiles: FileList;
  progresses: {name: string, percentage: number}[];

  constructor(private uploadService: FirebaseStorageService) {}

  selectFiles(event) {
    this.selectedFiles = event.target.files;
    this.progresses = [];
    Array.prototype.forEach.call(this.selectedFiles, (file) => {
      const progress = {name: file.name, percentage: 0};
      this.progresses.push(progress);
    });
  }

  upload() {
    Array.prototype.forEach.call(this.selectedFiles, (file, index) => {
      const upload = this.uploadService.pushFileToStorage(file, file.name, this.progresses[index]);
      console.log(upload);
    });
  }

  onDrop($event) {
    event.preventDefault();
    console.log($event);

  }
}
