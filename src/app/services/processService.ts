import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { Process } from '../models/process';
import { PROCESS } from '../data/mock-processes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProcessService {

  constructor(private http: HttpClient) { }
  private processURL = `${environment.apiUrl}/Process`
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProcess(): Observable<Process[]> {
    return of(PROCESS);
  }
  getProcessById(id: number): Observable<Process> {
    return of(PROCESS.find(process => process.id === id))
    
  }

  getAllProcess() {
    return this.http.get<Process[]>(`${this.processURL}/getAll`).toPromise();
  }

  getById(id: number): Observable<Process> {
    const url = `${this.processURL}/${id}`;
    return this.http.get<Process>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Process>(`getHero id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addProcess(process: Process): Observable<Process> {
    return this.http.post<Process>(`${this.processURL}/create`, process, this.httpOptions).pipe(
      tap((newProcess: Process) => console.log(`added process w/ id=${newProcess.id}`)),
      catchError(this.handleError<Process>('addProcess'))
    );
  }


 
   
}
