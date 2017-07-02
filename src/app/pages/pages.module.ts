import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

import { P404Component } from './404.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { RepeatPassDirective } from './repeat-pass.directive';

import { PagesService } from './pages.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  declarations: [
    P404Component,
    LoginComponent,
    RegisterComponent,
    RepeatPassDirective
  ],
  providers: [PagesService]
})
export class PagesModule { }
