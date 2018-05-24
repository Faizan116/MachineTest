import { Component, OnInit } from '@angular/core';
import { Employee, Address } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  errorMessage: string;
  employees: Employee[] = [];
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  id:number;
  constructor(private employeeService:EmployeeService, private route: ActivatedRoute) { 
    route.params.pipe(map(param => {return param.id})).subscribe(id => {this.id = id});
  
  }
  editData(employee) {
    this.employeeService.updateEmployee(employee)
    .subscribe(
      employee=>this.getEmployees(),
      error=>this.errorMessage=error);
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      employees=>this.employees=employees,
      error=>this.errorMessage=<any>error);
    
  }

  ngOnInit() {
    this.getEmployees();     

}
}