import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowVideoRoutingModule } from './show-video-routing.module';
import { ComponentModule } from '../component/component.module';

import { ShowVideoService } from './show-video.service';

import { ShowVideoComponent } from './show-video.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { PlayPPTComponent } from './play-ppt/play-ppt.component';
import { PlayAudioComponent } from './play-audio/play-audio.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    ShowVideoRoutingModule
  ],
  declarations: [
    ShowVideoComponent,
    PlayVideoComponent,
    PlayPPTComponent,
    PlayAudioComponent
  ],
  providers: [ShowVideoService]
})
export class ShowVideoModule { }
