import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ComponentModule } from '../component/component.module';

import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { LabelCourseComponent } from './all-courses/label-course.component';

import { CoursesService } from './courses.service';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    AllCoursesComponent,
    LabelCourseComponent
  ],
  providers: [CoursesService, AuthService]
})
export class CoursesModule { }
