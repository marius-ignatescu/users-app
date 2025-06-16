import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LogError } from '../model/logerror';

@Injectable({
  providedIn: 'root'
})
export class LogErrorService {

  private http = inject(HttpClient);

  constructor() { }

  logError(log: LogError):any {
    console.log(log);
    // TODO: here should be called the endpoint for logging errors but I don't have such...

     //this.http.post('https://jsonplaceholder.typicode.com/logerror', log);
  }
}
