import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentModule } from '../component/component.module';

import { HomeComponent } from './home.component';
import { HomeSideComponent } from './home-side/home-side.component';
import { ContainerTypeComponent } from './container-type/container-type.component';
import { NewsListComponent } from './news/news-list.component';
import { NewsComponent } from './news/news.component';

import { HomeService } from './home.service';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeSideComponent,
    ContainerTypeComponent,
    NewsListComponent,
    NewsComponent
  ],
  providers: [ HomeService, AuthService ]
})
export class HomeModule { }
