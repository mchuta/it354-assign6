import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserMessagesComponent } from './browser-messages/browser-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProjectCreateComponent } from './project-create/project-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BrowserMessagesComponent,
    ProjectDetailComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
