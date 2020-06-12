import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { Process } from './process';
import { PROCESS } from './mock-processes';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {

  constructor() { }

  getProcess(): Observable<Process[]> {
    return of(PROCESS);
  }
  getProcessById(id: number): Observable<Process> {
    return of(PROCESS.find(process => process.id === id))
  }
}
