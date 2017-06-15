import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { CoursesModule } from './courses/courses.module';
import { ShowVideoModule } from './show-video/show-video.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { FullLayoutsComponent } from './layouts/full-layouts.component';

import { FullLayoutsService } from './layouts/full-layouts.service';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CoursesModule,
    ShowVideoModule,
    PagesModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [FullLayoutsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
