import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutsComponent } from './full-layouts.component';

import { HomeComponent } from '../home/home.component';
import { NewsComponent } from '../home/news/news.component';
import { CoursesComponent } from '../courses/courses.component';
import { ShowVideoComponent } from '../show-video/show-video.component';
import { ShowPPTComponent } from '../show-video/show-ppt.component';
import { ShowAudioComponent } from '../show-video/show-audio.component';
import { ForumComponent } from '../forum/forum.component';
import { PostsComponent } from '../forum/posts/posts.component';
import { AskComponent } from '../forum/ask/ask.component';

import { AuthGuard } from '../auth-guard.service';

const layoutsRoutes: Routes = [
    {
        path: '',
        component: FullLayoutsComponent,
        
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'news/:id',
                component: NewsComponent
            },
            {
                path: 'courses',
                component: CoursesComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'video/:id',
                component: ShowVideoComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'audio/:id',
                component: ShowAudioComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'ppt/:id',
                component: ShowPPTComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'forum',
                component: ForumComponent
            },
            {
                path: 'ask',
                component: AskComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'posts/:id',
                component: PostsComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'null'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(layoutsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FullLayoutsRoutingModule { }
