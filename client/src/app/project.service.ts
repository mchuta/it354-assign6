import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';
import { MessengerService } from './messenger.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'http://it354.com/jamcin2/assignment6/api/projects';

  constructor(
    private http: HttpClient,
    private messengerService: MessengerService
  ) { }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        tap(_ => this.sendMessage('retrieved projects')),
        catchError(this.handleError<Project[]>('getProjects', []))
      );
  }

  public getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => this.sendMessage(`fetched project id ${id}`)),
      catchError(this.handleError<Project>(`getProject id ${id}`))
    );
  }

  public updateProject(project: Project): Observable<any> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put(url, project, httpOptions)
    .pipe(
      tap(_ => this.sendMessage(`updated project id ${project.id}`)),
      catchError(this.handleError<any>('updateProject'))
    );
  }

  public deleteProject(id: number): Observable<any> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.sendMessage(`deleted project id ${id}`)),
      catchError(this.handleError<any>('deleteProject'))
    );
  }

  public createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions)
    .pipe(
      tap(_ => this.sendMessage(`created project`)),
      catchError(this.handleError<Project>(`createProject`))
    );
  }

  private sendMessage(message: string): void {
    this.messengerService.write(`ProjectService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.sendMessage(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
