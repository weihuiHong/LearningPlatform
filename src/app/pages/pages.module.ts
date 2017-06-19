import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { P404Component } from './404.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    P404Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
