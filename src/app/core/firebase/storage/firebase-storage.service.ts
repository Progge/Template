import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import {FirebaseDatabaseService} from '../database/firebase-database.service';
import {FileUpload} from './file-upload.model';

@Injectable()
export abstract class FirebaseStorageService extends FirebaseDatabaseService<FileUpload> {

  readonly STORAGE_REF = firebase.storage().ref();

  upload (fileUpload: FileUpload): void {
    const uploadTask = this.STORAGE_REF.child(this.COLLECTION_PATH + '/' + fileUpload.file.name).put(fileUpload.file);
    uploadTask.on('state_changed',
    (snapshot: UploadTaskSnapshot) =>  {
      fileUpload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
    },
    () => {
      fileUpload.url = uploadTask.snapshot.downloadURL;
      fileUpload.name = fileUpload.file.name;
    });
  }
}
