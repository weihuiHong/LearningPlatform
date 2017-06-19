import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowVideoComponent } from './show-video.component';

const showVideoRoutes: Routes = [
  // {
  //   path: 'video/:src',
  //   component: ShowVideoComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(showVideoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShowVideoRoutingModule {

}
