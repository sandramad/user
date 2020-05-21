import { Employee } from './../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']

})
export class EmployeeDetailsComponent implements OnInit {
  employee: Observable<Employee[]>;
  employ: Employee = new Employee();
  submitted = false;
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) { }

  private id: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.loadData(this.id);
  }

  loadData(id: number) {
    this.employeeService.getEmployee(this.id)
      .pipe(
        map(employees => employees.data)
      ).subscribe(res => {
      this.employee = res;
      console.log(this.employee);
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(this.id)
      .subscribe(
        data => {
          this.loadData(this.id);
        },
        error => console.log(error));
  }
  save() {
    this.employeeService.updateEmployee(this.id, this.employ)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employ = new Employee();
  }

  editEmployee() {
    this.submitted = true;
    this.save();
  }}
