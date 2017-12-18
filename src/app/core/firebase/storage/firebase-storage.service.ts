import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import { FirebaseDatabaseService } from '../database/firebase-database.service';
import { Upload } from './upload.model';
import UploadTask = firebase.storage.UploadTask;

@Injectable()
export class FirebaseStorageService extends FirebaseDatabaseService<Upload> {

  COLLECTION_PATH = 'uploads';
  readonly STORAGE_REF = firebase.storage().ref();

  pushFileToStorage (file: File, name: string, progress?: {percentage: number}): void {
    const upload = new Upload();
    // const uploadTask = this.STORAGE_REF.child(this.COLLECTION_PATH + '/' + upload.file.name).put(upload.file);
    const uploadTask = this.uploadFile(file, name);
    uploadTask.on('state_changed',
      (snapshot: UploadTaskSnapshot) =>  {
        // in progress
        progress.percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        // error
        console.log(error);
      },
      () => {
        // success
        upload.name = name;
        upload.url = uploadTask.snapshot.downloadURL;
        upload.createdAt = uploadTask.snapshot.metadata.timeCreated;
        super.addItem(JSON.parse(JSON.stringify(upload)));
      });
  }

  uploadFile(file: File, name: string): UploadTask {
    const file_path = `${this.COLLECTION_PATH}/${name}`;
    return this.STORAGE_REF.child(file_path).put(file);
  }

  uploadBase64Image(base64Image: string, name: string): UploadTask {
    const format_first = base64Image.indexOf(':image/') + ':image/'.length;
    const format_last = base64Image.indexOf(';base64');
    const format = base64Image.substring(format_first, format_last);
    const image_name = name + '.' + format;
    const image_path = `${this.COLLECTION_PATH}/${image_name}`;
    return this.STORAGE_REF.child(image_path).putString(base64Image, 'data_url');
  }
}
