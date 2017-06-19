import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumService } from './forum.service';

import { ForumComponent } from './forum.component';
import { PostsComponent } from './posts/posts.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ForumComponent,
        PostsComponent,
        QuestionComponent
    ],
    providers: [ForumService]
})
export class ForumModule { }