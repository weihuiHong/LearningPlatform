import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowVideoRoutingModule } from './show-video-routing.module';
import { ComponentModule } from '../component/component.module';

import { ShowVideoService } from './show-video.service';

import { ShowVideoComponent } from './show-video.component';
import { ShowPPTComponent } from './show-ppt.component';
import { ShowAudioComponent } from './show-audio.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { PlayPPTComponent } from './play-ppt/play-ppt.component';
import { PlayAudioComponent } from './play-audio/play-audio.component';
import { ShowSideComponent } from './show-side/show-side.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    ShowVideoRoutingModule
  ],
  declarations: [
    ShowVideoComponent,
    ShowPPTComponent,
    ShowAudioComponent,
    PlayVideoComponent,
    PlayPPTComponent,
    PlayAudioComponent,
    ShowSideComponent
  ],
  providers: [ShowVideoService]
})
export class ShowVideoModule { }
