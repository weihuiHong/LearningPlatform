import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowVideoRoutingModule } from './show-video-routing.module';

import { ShowVideoService } from './show-video.service';

import { ShowVideoComponent } from './show-video.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    ShowVideoRoutingModule
  ],
  declarations: [
    ShowVideoComponent,
    PlayVideoComponent,
    CommentComponent
  ],
  providers: [ShowVideoService]
})
export class ShowVideoModule { }
