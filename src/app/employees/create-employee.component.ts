import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // gender = 'female';  to set default value in radio-button
  departments: Department[] = [
    {id: 1 , name: 'IT'},
    {id: 2 , name: 'HR'},
    {id: 3 , name: 'Engg'},
    {id: 4 , name: 'Payroll'},
    {id: 5 , name: 'Admin'},
  ];
  constructor() { }

  ngOnInit() {
  }
  save(myForm: NgForm) {
    console.log(myForm.value);
  }
}
