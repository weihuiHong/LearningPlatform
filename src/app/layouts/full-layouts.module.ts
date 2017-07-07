import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { HomeModule } from '../home/home.module';
import { CoursesModule } from '../courses/courses.module';
import { ShowVideoModule } from '../show-video/show-video.module';
import { ForumModule } from '../forum/forum.module';

import { FullLayoutsRoutingModule } from './full-layouts-routing.module';

import { FullLayoutsComponent } from './full-layouts.component';

import { FullLayoutsService } from './full-layouts.service';
import { AuthService } from '../auth.service';

@NgModule({
    imports: [
        CommonModule,
        HomeModule,
        FormsModule,
        CoursesModule,
        ShowVideoModule,
        ForumModule,
        FullLayoutsRoutingModule
    ],
    declarations: [
        FullLayoutsComponent
    ],
    providers: [
      FullLayoutsService,
      AuthService
    ]
})
export class FullLayoutsModule { }
