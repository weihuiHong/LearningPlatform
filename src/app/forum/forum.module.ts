import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ComponentModule } from '../component/component.module';

import { ForumRoutingModule } from './forum-routing.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { ForumService } from './forum.service';
import { AuthService } from '../auth.service';

import { ForumComponent } from './forum.component';
import { PostsComponent } from './posts/posts.component';
import { QuestionComponent } from './question/question.component';
import { ForumCommentComponent } from './forum-comment/forum-comment.component';
import { AskComponent } from './ask/ask.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentModule,
        ForumRoutingModule,
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
    providers: [ForumService, AuthService]
})
export class ForumModule { }