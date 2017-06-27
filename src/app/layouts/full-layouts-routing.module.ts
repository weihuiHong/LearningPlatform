import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutsComponent } from './full-layouts.component';

import { HomeComponent } from '../home/home.component';
import { NewsComponent } from '../home/news/news.component';
import { CoursesComponent } from '../courses/courses.component';
import { ShowVideoComponent } from '../show-video/show-video.component';
import { ForumComponent } from '../forum/forum.component';
import { PostsComponent } from '../forum/posts/posts.component';

import { AuthGuard } from '../auth-guard.service';

const layoutsRoutes: Routes = [
    {
        path: '',
        component: FullLayoutsComponent,
        canActivate: [AuthGuard],
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
                component: CoursesComponent
            },
            {
                path: 'video/:src',
                component: ShowVideoComponent
            },
            {
                path: 'forum',
                component: ForumComponent
            },
            {
                path: 'posts',
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
