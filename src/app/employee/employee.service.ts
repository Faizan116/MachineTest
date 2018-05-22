import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError,tap} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import {Employee} from './employee';

@Injectable()
export class EmployeeService {

  private employeesUrl = './assets/employees.json';


  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(data => console.log('Data fetched:'+JSON.stringify(data))),
      catchError(this.handleError));
      
  
    }
    private handleError(err:HttpErrorResponse){
      let errMsg:string='';
      if(err.error instanceof Error){
        console.log('An error occurred:',err.error.message);
        errMsg=err.error.message;
      }
      else{
        console.log(`Backend returned code ${err.status}`);
        errMsg=err.error.status;
      }
      return Observable.throw(errMsg);
    }

}
