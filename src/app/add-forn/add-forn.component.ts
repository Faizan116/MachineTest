import { Component, OnInit } from '@angular/core';
import { Employee, Address } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-forn',
  templateUrl: './add-forn.component.html',
  styleUrls: ['./add-forn.component.css']

})
export class AddFornComponent {

  employee: Employee = <Employee>{};
  address: Address = <Address>{}
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  constructor(private empService: EmployeeService) {
    this.employee.address = this.address;
  }
  save(employee) {
    this.empService.save(this.employee).subscribe();
  }
}
