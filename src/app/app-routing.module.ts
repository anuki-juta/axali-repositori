import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnchorTagsComponent } from './anchor-tags/anchor-tags.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmailComponent } from './email/email.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { GridComponent } from './grid/grid.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PickComponent } from './pick/pick.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users/users.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent}, 
  {path: 'directive', component: DirectiveComponent},
  {path: 'video', component: VideoBackgroundComponent},
  {path: 'search', component: UserSearchComponent},
  {path: 'tags', component: AnchorTagsComponent},
 {path: 'gallery', component: ImageGalleryComponent},
 {path: 'pick', component: PickComponent},
  {path: 'center', component: CenterContentComponent},
  {path: 'grid', component: GridComponent},
  {path: 'email', component: EmailComponent},
  {path: 'pipe', component: PipeExampleComponent},
  {path: 'formreactive', component: FormreactiveComponent},
  {path: '', redirectTo: 'video', pathMatch: 'full'} 

];
/*
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
};*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }