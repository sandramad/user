import { Employee } from './../employee';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

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
  @ViewChild('u', { static: false }) userForm: NgForm;

  private id: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.loadData(this.id);
  }
  loadData(id: number) {
    this.employeeService.getEmployee(this.id)
      .pipe(
        map(employees => employees.data)
      ).subscribe(res => {
      this.employee = res;
    });

  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(this.id)
      .subscribe(
        data => {
          this.router.navigate(['employees']);
        },
        error => console.log(error));
  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    this.employeeService.updateEmployee(this.id, form.value)
      .subscribe(data => data, error => console.log(error));
    this.employ = new Employee();
  }
 }
