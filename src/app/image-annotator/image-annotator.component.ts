import { Component, OnInit, Inject, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MarkerArea, ArrowMarker, RectMarker } from 'markerjs';
import { MarkerAreaState } from 'markerjs/typings/MarkerAreaState';

@Component({
  selector: 'app-image-annotator',
  templateUrl: './image-annotator.component.html',
  styleUrls: ['./image-annotator.component.css']
})
export class ImageAnnotatorComponent implements OnInit {
  constructor() { }
  img_ele: any = null;
  x_img_ele = 0;
  y_img_ele = 0;
  imgSrc: string;
  imgState: MarkerAreaState;
  markerArea: MarkerArea;
  moveEnabled: boolean;

  @Input()
  get selectedImage(): any { return this._selectedImage; }
  @Output() cancelledAnnotation: EventEmitter<any> = new EventEmitter<any>();
  @Output() savedAnnotation: EventEmitter<any> = new EventEmitter<any>();

  set selectedImage(img: any) {
    this._selectedImage = img;
    this.imgSrc = this._selectedImage.imageUrl;
    console.log(this.imgSrc);
  }
  private _selectedImage;

  ngOnInit(): void {
    this.moveEnabled = false;

    // this.markerArea.show((dataUrl) => {
    //   console.log(dataUrl);
    //   const res: any = document.getElementById("drag-img");
    //   res.src = dataUrl;
    // });

    // this.enable();
  }

  toggleMove() {
    this.moveEnabled = !this.moveEnabled;
  }

  showApiMarker() {
    this.markerArea = new MarkerArea(document.getElementById('drag-img') as any, {
      renderAtNaturalSize: true,
      markerColors: {
        mainColor: '#00cc00',
        highlightColor: null,
        coverColor: null
      }
    });
    this.markerArea.open();
    document.getElementById('markerActivator').style.display = 'none';
    document.getElementById('markerControls').style.display = '';
  }

  addArrow() {
    if (this.markerArea) {
      this.markerArea.addMarker(ArrowMarker);
    }
  }

  addRectangle(){
    if(this.markerArea) {
      this.markerArea.addMarker(RectMarker);
    }
  }

  deleteMarker() {
    if (this.markerArea) {
      console.log('her');
      this.markerArea.deleteActiveMarker();
    }
  }
  render() {
    if (this.markerArea) {
      this.markerArea.render((dataUrl, state) => {
        const res: any = document.getElementById("drag-img");
        res.src = dataUrl;
        this.imgSrc = dataUrl;
        this.imgState = state;
        res.style.display = "";
      });
    }
  }

  closeMarkerArea() {
    if (this.markerArea) {
      this.markerArea.close();
    }
    document.getElementById('markerActivator').style.display = '';
    document.getElementById('markerControls').style.display = 'none';
  }

  zoom(zoomincrement) {
    this.img_ele = document.getElementById('drag-img');
    console.log(this.img_ele.width + "," + this.img_ele.height);
    var pre_width = this.img_ele.width,
      pre_height = this.img_ele.height;
    this.img_ele.style.width = (pre_width * zoomincrement) + 'px';
    this.img_ele.style.height = (pre_height * zoomincrement) + 'px';
    this.img_ele = null;
  }

  start_drag(img_ele, event) {
    if (this.moveEnabled) {
      this.img_ele = document.getElementById('drag-img');
      this.x_img_ele = event.clientX - document.getElementById('drag-img').offsetLeft;
      this.y_img_ele = event.clientY - document.getElementById('drag-img').offsetTop;
    }
  }

  stop_drag() {
    this.img_ele = null;
    console.log("stop drag");
  }

  while_drag(event) {
    var x_cursor = event.clientX;
    var y_cursor = event.clientY;
    if (this.img_ele !== null) {
      this.img_ele.style.left = (x_cursor - this.x_img_ele) + 'px';
      this.img_ele.style.top = (event.clientY - this.y_img_ele) + 'px';
      console.log('dragging > img_left:' + this.img_ele.style.left + ' | img_top: ' + this.img_ele.style.top);
    }
  }

  saveAnnotation() {
    try{
      this.markerArea.close();
    }catch(e){
      
    }
    this.savedAnnotation.emit(this.imgSrc);
  }

  cancelAnnotation() {
    try{
      this.markerArea.close();
    }catch(e){

    }
    this.cancelledAnnotation.emit();
  }

}
