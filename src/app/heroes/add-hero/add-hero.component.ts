import { Component, OnInit } from '@angular/core';
import { Upload } from '../../core/firebase/storage/upload.model';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})

export class AddHeroComponent {

  uploading = false;
  selectedFiles: FileList;
  progress: {percentage: number} = {percentage: 0};

  constructor(private uploadService: FirebaseStorageService) {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploading = true;
    console.log(this.uploadService.pushFileToStorage(file, file.name, this.progress));
  }
}
