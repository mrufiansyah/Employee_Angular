import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList :  Employee[] = [];

  constructor(private formbuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {

    this.getAllEmployee();

    this.empDetail = this.formbuilder.group({
      username : [''],
      firstname : [''],
      lastname : [''],
      email : [''],
      birthDate : [''],
      basicSalary : [''],
      status : [''],
      group : [''] 
    });

  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.username = this.empDetail.value.username;
    this.empObj.firstName = this.empDetail.value.firstname;
    this.empObj.lastName = this.empDetail.value.lastname;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.birthDate = this.empDetail.value.birthDate;
    this.empObj.basicSalary = this.empDetail.value.basicSalary;
    this.empObj.status = this.empDetail.value.status;
    this.empObj.group = this.empDetail.value.group;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    }, err=>{
      console.log(err);
    });
  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;
    }, err => {
      console.log("error while fecthing data.");
    });
  }

  editEmployee(emp : Employee) {
    this.empDetail.controls['username'].setValue(emp.username);
    this.empDetail.controls['firstname'].setValue(emp.firstName);
    this.empDetail.controls['lastname'].setValue(emp.lastName);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['birthdate'].setValue(emp.birthDate);
    this.empDetail.controls['basicsalary'].setValue(emp.basicSalary);
    this.empDetail.controls['status'].setValue(emp.status);
    this.empDetail.controls['group'].setValue(emp.group);
  }

}
