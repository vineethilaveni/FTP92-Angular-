import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeComponent implements OnInit {
  constructor(private router:Router, private employeeService: EmployeeService) { }

  title = 'Leave Management Application';
  employees: Employee[];

  getEmployees(): void {
      this.employeeService.getEmployees().subscribe(data=>this.employees=data,err=>console.log(err));
    
  }

  ngOnInit(): void {
    this.getEmployees();
  }
  emp(emp)
  {
    var uid=emp.empId;
    localStorage.setItem("userId",emp.empId);
    var uName=emp.empName;
    localStorage.setItem("userName",uName);
    var uEmail=emp.empEmail;
    localStorage.setItem("userEmail",uEmail)
    console.log(uName);
    var uMob=emp.empMobileNo;
    localStorage.setItem("userMobile",uMob);
    var uDOJ = emp.empDoj;
    localStorage.setItem("userDoj",uDOJ);
    var empDept= emp.empDept;
    localStorage.setItem("userDept",empDept);
    var empLBalance=emp.empLeaveBalance;
    localStorage.setItem("userLeaveBalance",empLBalance)
    var empManagerId = emp.empManagerId;
    localStorage.setItem("empManagerId",empManagerId);
    console.log(empManagerId)
    console.log(uid);
    this.router.navigate(["login"]);
  }
}
