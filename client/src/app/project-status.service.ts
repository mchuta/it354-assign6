import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectStatusService {

  statuses: string[] = [
      "New",
      "In Progress",
      "On Hold",
      "Completed"
  ]
}
