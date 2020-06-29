import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Phase } from '../models/phase';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  constructor(private http: HttpClient) { }
  private phaseURL = `${environment.apiUrl}/Phase`
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //lấy phase theo id từ database
  getById(id: number): Observable<Phase> {
    const url = `${this.phaseURL}/${id}`;
    return this.http.get<Phase>(url).pipe(
      tap(_ => console.log("Đã lấy phase")),
      catchError(this.handleError<Phase>(`getHero id=${id}`))
    );
  }
  
  //lay phase co ca field
  getId(id: number): Observable<Phase> {
    const url = `${this.phaseURL}/${id}/get`;
    return this.http.get<Phase>(url).pipe(
      tap(_ => console.log("OK")),
      catchError(this.handleError<Phase>(`get Phase id=${id}`))
    )
  }

  //thêm mới phase
  addPhase(phase: Phase): Observable<Phase> {
    return this.http.post<Phase>(`${this.phaseURL}/create`, phase, this.httpOptions).pipe(
      tap((newPhase: Phase) => console.log(`Created new phase id=${newPhase.id}`)),
      catchError(this.handleError<Phase>('add phase loi'))
    );
  }

  // sửa phase
  updatePhase(phase: Phase): Observable<any> {
    return this.http.put(`${this.phaseURL}/edit`, phase, this.httpOptions).pipe(
      tap(_ => console.log(`updated phase id=${phase.id}`)),
      catchError(this.handleError<any>('update Phase'))
    );
  }

  //xóa phase
  deletePhase(phase: Phase | number): Observable<Phase> {
    const id = typeof phase === 'number' ? phase : phase.id;
    const url = `${this.phaseURL}/${id}`;

    return this.http.delete<Phase>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted phase id=${id}`)),
      catchError(this.handleError<Phase>('delete Phase'))
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
}
