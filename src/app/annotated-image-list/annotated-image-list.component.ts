import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploaderService } from "../uploader.service";


@Component({
  selector: 'app-annotated-image-list',
  templateUrl: './annotated-image-list.component.html',
  styleUrls: ['./annotated-image-list.component.css']
})
export class AnnotatedImageListComponent implements OnInit {
  @Output() onImageSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor(private uploader: UploaderService) { }
  uploadedFiles: any  = [];
  ngOnInit(): void {
    this.uploadedFiles = this.uploader.annotatedImages;
    
    this.uploader.uploadedAnnotatedFile.subscribe((uploaded)=>{
      this.uploadedFiles = this.uploader.annotatedImages;
      console.log(this.uploadedFiles);   
    })                                               
  }

  openAnnotator(index: any){
    this.onImageSelected.emit(this.uploadedFiles[index]);
  }

}
