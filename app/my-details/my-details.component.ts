import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
 empid:string;
 empName:string;
 empEmail:string;
 empMob:string;
 empDoj:string;
 empLBal:string;
 empDept:string;

  constructor() { }

  ngOnInit() {
    this.empid=localStorage.getItem("userId");
    this.empDept=localStorage.getItem("userDept");
    this.empDoj=localStorage.getItem("userDoj");
    this.empEmail=localStorage.getItem("userEmail");
    this.empLBal=localStorage.getItem("userLeaveBalance");
    this.empName=localStorage.getItem("userName");
    this.empMob=localStorage.getItem("userMobile")
  }

}
