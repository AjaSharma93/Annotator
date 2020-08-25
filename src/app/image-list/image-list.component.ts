import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImageAnnotatorComponent } from '../image-annotator/image-annotator.component';
import { UploaderService } from "../uploader.service";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  @Output() onImageSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private uploader: UploaderService) { }
  uploadedFiles: any  = [];
  ngOnInit(): void {
    this.uploadedFiles = this.uploader.images;
    
    this.uploader.uploadedFile.subscribe((uploaded)=>{
      this.uploadedFiles = this.uploader.images;
      console.log(this.uploadedFiles);   
    })                                               
  }

  openAnnotator(index: any){
    this.onImageSelected.emit(this.uploadedFiles[index]);
  }

}
