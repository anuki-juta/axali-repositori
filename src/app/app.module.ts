import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { EmailComponent } from './email/email.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { UsersComponent } from './users/users.component';
import { UsersServiceService } from './users-service.service';

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
import { FilterPipe } from './filter.pipe';
import { PickComponent } from './pick/pick.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';


@NgModule({
  declarations: [
  
    AppComponent,
    EmailComponent,
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
    DirectiveComponent,
    FilterPipe,
    PickComponent,
    FormreactiveComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
   IvyGalleryModule,
   ReactiveFormsModule 

  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
