import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { UsersComponent } from './users/users.component';
import { UsersServiceService } from './users-service.service';
import { FormsModule } from '@angular/forms';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { AnchorTagsComponent } from './anchor-tags/anchor-tags.component';
import { GridComponent } from './grid/grid.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { MyPipePipe } from './my-pipe.pipe';
import { DateFormatgPipe } from './date-formatg.pipe';
import { IvyGalleryModule } from 'angular-gallery';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
  
    AppComponent,
    UsersComponent,
    PipeExampleComponent,
    HeadComponent,
    AnchorTagsComponent,
    CenterContentComponent,
    GridComponent,
    UserSearchComponent,
    VideoBackgroundComponent,
    MyPipePipe,
    DateFormatgPipe,
    ImageGalleryComponent,
    DirectiveComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
   IvyGalleryModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
