import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  // gender = 'female';  to set default value in radio-button
  previewPhoto = false;
  departments: Department[] = [
    {id: 1 , name: 'IT'},
    {id: 2 , name: 'HR'},
    {id: 3 , name: 'Engg'},
    {id: 4 , name: 'Payroll'},
    {id: 5 , name: 'Admin'},
  ];

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    isActive: null,
    department: null,
    photoPath: null
  }
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat : 'DD/MM/YYYY',
      });
  }

  ngOnInit() {
  }
  save(newEmployee: Employee) {
    console.log(newEmployee);
  }

  togglePhoto() {
    this.previewPhoto = !this.previewPhoto;
  }
}
