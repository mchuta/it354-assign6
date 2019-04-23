import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { BrowserMessagesComponent } from './browser-messages/browser-messages.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent},
  { path: 'messages', component: BrowserMessagesComponent},
  { path: 'projects/new', component: ProjectCreateComponent},
  { path: 'projects/:id', component: ProjectDetailComponent},
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
