import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MessengerService } from '../messenger.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private messengerService: MessengerService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  new() {
    this.router.navigateByUrl('/projects/new');
  }

}
