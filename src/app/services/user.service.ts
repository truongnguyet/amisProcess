import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Users } from '../models/users';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private urlUser = `${environment.apiUrl}/Users`;

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  

    getAll() {
        return this.http.get<Users[]>(`${environment.apiUrl}/api/Users`);
    }
    getUsers() {
        return this.http.get<Users[]>(`${this.urlUser}/getUser`)
      }
   getById(id: string): Observable<Users> {
        const url = `${this.urlUser}/${id}`;
        return this.http.get<Users>(url).pipe(
          tap(),
          catchError(this.handleError<Users>(`get user id=${id}`))
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
