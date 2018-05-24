import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap,catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {Employee} from './employee';


@Injectable()
export class EmployeeService {

  
 private employeesUrl = '.src/assets/employees.json';
 private empUrl = 'api/employee';

  
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl).pipe(
      tap(data => console.log('Data fetched:'+JSON.stringify(data))),
      catchError(this.handleError));    
  
    }

    getEmployee(id): Observable<Employee> {
      return this.http.get<Employee[]>(this.empUrl).pipe(
        tap(data => JSON.stringify(data.filter(emp => emp.id == id)[0])),
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
        errMsg=err.statusText;
      }
      return Observable.throw(errMsg);
    }
    save(employee:Employee):Observable<Employee>{
      let options = new HttpHeaders({ 'Content-Type': 'application/json'})
     
      return this.http.post<Employee>(this.empUrl, employee,{headers:options}).pipe(
        catchError(this.handleError));
    }

    updateEmployee(employee:Employee):Observable<Employee>{
      let options = new HttpHeaders({ 'Content-Type': 'application/json'})
     
      return this.http.put<Employee>(this.empUrl, employee,{headers:options}).pipe(
        tap(_=>console.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError));
    }


    }
  
