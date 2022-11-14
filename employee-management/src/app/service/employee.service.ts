import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpUrl : string;

  constructor(private http : HttpClient) {
    this.addEmpUrl = 'http://localhost:4200/emp/addEmployee';
    this.addEmpUrl = 'http://localhost:4200/emp/getAll';
   }

   addEmployee(emp : Employee) : Observable<Employee> {
    return this.http.post<Employee>(this.addEmpUrl,emp);
   }

   getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.addEmpUrl);
   }
}
