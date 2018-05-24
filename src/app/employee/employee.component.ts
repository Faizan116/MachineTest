import { Component, OnInit } from '@angular/core';
import {EmployeeService } from './employee.service'; 
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {

  

employees: Employee[]=[];
errorMessage:string;

  constructor(private employeeService: EmployeeService) { }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      employees => this.employees = employees,
      error => this.errorMessage = <any>error);
    
  }


  ngOnInit() {
    this.getEmployees();
  }

}
