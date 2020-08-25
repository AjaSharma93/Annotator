import { Component, OnInit } from '@angular/core';
import { ImageAnnotatorComponent } from '../image-annotator/image-annotator.component';
import {MatDialog} from '@angular/material/dialog';
import { UploaderService } from "../uploader.service";

@Component({
  selector: 'app-images-viewer',
  templateUrl: './images-viewer.component.html',
  styleUrls: ['./images-viewer.component.css']
})
export class ImagesViewerComponent implements OnInit {
  selectedImage: any;
  imageSelected:boolean = false;
  constructor(public dialog: MatDialog, private uploader: UploaderService) { }

  ngOnInit(): void {
  }

  onImageSelected(img){
    this.selectedImage = img;
    this.imageSelected = true;
  }

  saveAnnotation(img){
    this.uploader.uploadAnnotatedFile(img);
    this.selectedImage = null;
    this.imageSelected = false;
  }

  cancelAnnotation(){
    this.selectedImage = null;
    this.imageSelected = false;
  }

  onAnnotatedImageSelected(img){
    this.selectedImage = img;
    this.imageSelected = true;
  }

}
