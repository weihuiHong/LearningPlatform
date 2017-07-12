import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardCourseComponent } from './card-course.component';
import { CommentComponent } from './comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardCourseComponent,
    CommentComponent
  ],
  exports: [
    CardCourseComponent,
    CommentComponent
  ]
})
export class ComponentModule {

}
