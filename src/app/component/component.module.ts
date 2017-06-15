import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardCourseComponent } from './card-course.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardCourseComponent
  ],
  exports: [
    CardCourseComponent
  ]
})
export class ComponentModule {

}
