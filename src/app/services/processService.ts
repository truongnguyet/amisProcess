import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { Process } from '../models/process';
import { PROCESS } from '../data/mock-processes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { PageResult } from '../models/pageResult';


@Injectable({
  providedIn: 'root',
})
export class ProcessService {

  constructor(private http: HttpClient) { }
  private processURL = `${environment.apiUrl}/Process`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // lấy tất cả process trên database
  getAllProcess() {
    return this.http.get<Process[]>(`${this.processURL}/getAll`)
  }

  //phân trang
  getProcess(index : number):Observable<PageResult>{
    const url = `${this.processURL}/page/${index}`;
    return this.http.get<PageResult>(url).pipe(
      tap(_=> console.log(`Đã lấy trang thứ ${index}`)),
      catchError(this.handleError<PageResult>("Lỗi"))
    )

  }

    //search process by name and phân trang
    search(index: number,text: string): Observable<PageResult> {
      const url = `${this.processURL}/${index}/${text}`;
      return this.http.get<PageResult>(url).pipe(
        tap(),
        catchError(this.handleError<PageResult>("Lỗi"))
      )
    }

  //lấy process theo id từ database
  getById(id: number): Observable<Process> {
    const url = `${this.processURL}/phase/${id}`;
    return this.http.get<Process>(url).pipe(
      tap(),
      catchError(this.handleError<Process>(`getProcess id=${id}`))
    );
  }

  //lay ca phase va field
  getPro(id : string): Observable<Process> {
    const url = `${this.processURL}/${id}/get`;
    return this.http.get<Process>(url).pipe(
      tap(),
      catchError(this.handleError<Process>(`get lỗi`))
    )
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //thêm mới process 
   addProcess(process: Process): Observable<Process> {
    return  this.http.post<Process>(`${this.processURL}/create`, process, this.httpOptions).pipe(
      tap((newProcess: Process) => {
        console.log(`added process w/ id=${newProcess.id}`)
      }),
      catchError(this.handleError<Process>('addProcess'))
     );
  }
  //update process
  updateProcess(process: Process): Observable<any> {
    return this.http.put(`${this.processURL}/edit`, process, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>('update process'))
    );
  }


 
   
}
