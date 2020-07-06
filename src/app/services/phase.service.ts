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
      tap(_ => console.log()),
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
  //lấy user của phase
  getUserOfPhase(id: string): Observable<Phase> {
    const url = `${this.phaseURL}/${id}`;
    return this.http.get<Phase>(url).pipe(
      tap(_ => console.log()),
      catchError(this.handleError<Phase>(`get Phase id=${id}`))
    )
  }

  //thêm mới phase
  addPhase(phase: Phase): Observable<Phase> {
    return this.http.post<Phase>(`${this.phaseURL}/createAll`, phase, this.httpOptions).pipe(
      tap((newPhase: Phase) => console.log()),
      catchError(this.handleError<Phase>('add phase loi'))
    );
  }

  // sửa phase
  updatePhase(phase: Phase): Observable<any> {
    return this.http.put(`${this.phaseURL}/editPhase`, phase, this.httpOptions).pipe(
      tap(_ => console.log(`updated phase id=${phase.id}`)),
      catchError(this.handleError<any>('update Phase'))
    );
  }

  //xóa phase
  deletePhase(id : string): Observable<Phase> {
    //const id = typeof phase === 'string' ? phase : phase.id;

    return this.http.delete<Phase>(`${this.phaseURL}/delete/${id}`, this.httpOptions).pipe(
      tap(_ => console.log(`deleted phase id=${id}`)),
      catchError(this.handleError<Phase>('delete Phase'))
    );
  }
  // sửa field trong phase
  updateField(phase : Phase): Observable<any> {
    return this.http.put(`${this.phaseURL}/editField`, phase,this.httpOptions).pipe(
      tap(_ =>console.log()),
      catchError(this.handleError<any>('Lỗi update'))
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
}
