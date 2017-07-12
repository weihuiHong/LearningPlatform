import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const forumRoutes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(forumRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ForumRoutingModule {
  
}
