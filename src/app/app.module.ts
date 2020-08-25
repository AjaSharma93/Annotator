import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageAnnotatorComponent } from './image-annotator/image-annotator.component';
import {
  MatMenuModule
} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageListComponent } from './image-list/image-list.component';
import { AnnotatedImageListComponent } from './annotated-image-list/annotated-image-list.component';
import { ImagesViewerComponent } from './images-viewer/images-viewer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ImageAnnotatorComponent,
    MenuListItemComponent,
    FileUploadComponent,
    ImageListComponent,
    AnnotatedImageListComponent,
    ImagesViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FileUploadComponent
  ]
})
export class AppModule { }
