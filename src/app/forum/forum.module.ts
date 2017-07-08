import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { ForumService } from './forum.service';

import { ForumComponent } from './forum.component';
import { PostsComponent } from './posts/posts.component';
import { QuestionComponent } from './question/question.component';
import { ForumCommentComponent } from './forum-comment/forum-comment.component';
import { AskComponent } from './ask/ask.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
    ],
    declarations: [
        ForumComponent,
        PostsComponent,
        QuestionComponent,
        ForumCommentComponent,
        AskComponent
    ],
    providers: [ForumService]
})
export class ForumModule { }