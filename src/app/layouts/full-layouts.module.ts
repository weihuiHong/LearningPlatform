import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../home/home.module';
import { CoursesModule } from '../courses/courses.module';
import { ShowVideoModule } from '../show-video/show-video.module';
import { ForumModule } from '../forum/forum.module';

import { FullLayoutsRoutingModule } from './full-layouts-routing.module';

import { FullLayoutsComponent } from './full-layouts.component';

import { FullLayoutsService } from './full-layouts.service';

@NgModule({
    imports: [
        CommonModule,
        HomeModule,
        CoursesModule,
        ShowVideoModule,
        ForumModule,
        FullLayoutsRoutingModule
    ],
    declarations: [
        FullLayoutsComponent
    ],
    providers: [FullLayoutsService]
})
export class FullLayoutsModule { }