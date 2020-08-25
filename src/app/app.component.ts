import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FileUploadComponent }  from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Annotator';
  constructor(public dialog: MatDialog) {}

  uploadFile(){
    let dialogRef = this.dialog.open(FileUploadComponent, {
      height: '200px',
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
