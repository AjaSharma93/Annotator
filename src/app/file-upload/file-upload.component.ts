import { Component, OnInit, Inject } from '@angular/core';
import { UploaderService } from "../uploader.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  progress: number;
  infoMessage: any;
  isUploading: boolean = false;
  file: File;

  imageUrl: string | ArrayBuffer =
    "https://bulma.io/images/placeholders/480x480.png";
  fileName: string = "No file selected";

  constructor(
    private uploader: UploaderService,
    public dialogRef: MatDialogRef<FileUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.progress = 0;
  }

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    }
  }

  closeRef(){
    this.dialogRef.close();
  }

  onUpload() {
    this.infoMessage = null;
    this.progress = 0;
    this.isUploading = true;

    this.uploader.upload(this.file);
    this.uploader.progressSource.subscribe(progress => {
      this.progress = progress;
      if(progress == 100) {
        console.log(progress);
        this.progress = 0;
        this.isUploading = false;
        this.onCloseClick();
      }
    });
    // .subscribe(message => {
    //   this.isUploading = false;
    //   this.infoMessage = message;
    // });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}