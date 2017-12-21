import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import { Upload } from './upload.model';
import UploadTask = firebase.storage.UploadTask;

@Injectable()
export class FirebaseStorageService {

  readonly STORAGE_REF = firebase.storage().ref();

  // Works but should not be used

  /*pushFileListToStorage(files: FileList, progresses?: [{percentage: number}]): Upload[] {
    const uploads: Upload[] = new Array(files.length);
    Array.prototype.forEach.call(files, (file, index) => {
      const uploadTask = this.uploadFile(file, 'files', file.name);
      if (progresses) {
        uploads[index] = this.trackUpload(uploadTask, progresses[index]);
      } else {
        uploads[index] = this.trackUpload(uploadTask);
      }

    });
    return uploads;
  }*/

  pushFileToStorage (file: File, name: string, progress?: {percentage: number}): Upload {
    const uploadTask = this.uploadFile(file, 'files', name);
    return this.trackUpload(uploadTask, progress);
  }

  pushBase64ImageToStorage(base64Image: string, name: string, progress?: {percentage: number}): Upload {
    const uploadTask = this.uploadBase64Image(base64Image, 'images', name);
    return this.trackUpload(uploadTask, progress);
  }

  trackUpload(uploadTask: UploadTask, progress?: {percentage: number}): Upload {
    const upload = new Upload();
    uploadTask.on('state_changed',
      (snapshot: UploadTaskSnapshot) => {
        // in progress
        progress.percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        // error
        console.log(error);
      },
      () => {
        // complete
        upload.name = name;
        upload.url = uploadTask.snapshot.downloadURL;
        upload.createdAt = uploadTask.snapshot.metadata.timeCreated;
      });
    return upload;
  }

  uploadFile(file: File, folder: string, name: string): UploadTask {
    const file_path = `${folder}/${name}`;
    return this.STORAGE_REF.child(file_path).put(file);
  }

  uploadBase64Image(base64Image: string, folder: string, name: string): UploadTask {
    const format_first = base64Image.indexOf(':image/') + ':image/'.length;
    const format_last = base64Image.indexOf(';base64');
    const format = base64Image.substring(format_first, format_last);
    const image_name = `${name}.${format}`;
    const image_path = `${folder}/${image_name}`;
    return this.STORAGE_REF.child(image_path).putString(base64Image, 'data_url');
  }
}
