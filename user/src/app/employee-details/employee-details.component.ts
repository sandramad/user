import { Employee } from './../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],providers:[Employee]

})
export class EmployeeDetailsComponent implements OnInit {
  employee: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) { }
  items = [];

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
}
