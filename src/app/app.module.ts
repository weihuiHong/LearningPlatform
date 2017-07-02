import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    PagesModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'LearningPlatform',
      storageType: 'localStorage'
    })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
