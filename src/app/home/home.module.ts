import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentModule } from '../component/component.module';

import { HomeComponent } from './home.component';
import { HomeSideComponent } from './home-side/home-side.component';
import { ContainerTypeComponent } from './container-type/container-type.component';
import { NewsComponent } from './news/news.component';

import { HomeService } from './home.service';

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
    NewsComponent
  ],
  providers: [ HomeService ]
})
export class HomeModule { }