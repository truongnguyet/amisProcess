import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FieldData } from '../models/fieldData';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  private fieldURL = `${environment.apiUrl}/Field`
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //tạo field
  addField(field: FieldData): Observable<FieldData> {
    return  this.http.post<FieldData>(`${this.fieldURL}/create`, field, this.httpOptions).pipe(
      tap((field: FieldData) => {
        console.log(`added field id=${field.id}`)
      }),
      catchError(this.handleError<FieldData>('Lỗi'))
     );
  }

  //sửa field
  updateField(field: FieldData): Observable<any> {
    return this.http.put(`${this.fieldURL}/edit`, field, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>('update process'))
    );
  }

  //xóa field
  deleteField(id : string): Observable<any> {
    return this.http.delete(`${this.fieldURL}/${id}`, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>('update process'))
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
