import { Component } from '@angular/core';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';
import {Ng2ImgMaxService} from 'ng2-img-max';

@Component({
  selector: 'app-upload-heroes',
  templateUrl: './upload-heroes.component.html',
  styleUrls: ['./upload-heroes.component.css']
})
export class UploadHeroesComponent {

  selectedFiles: FileList;
  progresses: {name: string, percentage: number}[];

  constructor(private uploadService: FirebaseStorageService, private ng2ImgMaxService: Ng2ImgMaxService) { }

  selectFiles(event) {
    this.selectedFiles = event.target.files;
    this.progresses = [];
    Array.prototype.forEach.call(this.selectedFiles, (file) => {
      const progress = {name: file.name, percentage: 0};
      this.progresses.push(progress);
    });
    const fileArr = Array.from(this.selectedFiles);
    this.ng2ImgMaxService.compress(fileArr, 0.3).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  upload() {
    Array.prototype.forEach.call(this.selectedFiles, (file, index) => {
      const upload = this.uploadService.pushFileToStorage(file, file.name, this.progresses[index]);
      console.log(upload);
    });
  }
}
