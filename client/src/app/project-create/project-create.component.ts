import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MessengerService } from '../messenger.service';
import { ProjectStatusService } from '../project-status.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  project: Project = {
    id: 0,
    project_name: '',
    project_body: '',
    project_status: 'New',
    project_user_id: 18,
    date_created: null
  };

  constructor(
    private projectService: ProjectService,
    private messengerService: MessengerService,
    private location: Location,
    public projectStatusService: ProjectStatusService
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  cancel(): void {
    this.goBack();
  }

  create(): void {
    this.project.date_created = new Date();

    this.projectService.createProject(this.project)
      .subscribe(() => 
        this.goBack()
      );
  }

}
