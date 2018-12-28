import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  constructor(private employee:EmployeeService) { }
    emp:Employee;
  ngOnInit() {
    this.employee.getMgrDetails().subscribe(emp1 => this.emp=emp1);
console.log(this.emp)
  }

}
