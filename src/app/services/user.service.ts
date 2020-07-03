import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Users } from '../models/users';


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
}
