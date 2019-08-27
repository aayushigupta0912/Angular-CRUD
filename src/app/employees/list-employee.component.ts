import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Ayushi Gupta',
      gender: 'Female',
      email: 'aayushigupta@gmail.com',
      phoneNumber: 9458706434,
      contactPreference: 'email',
      dateOfBirth: new Date('08/23/2019'),
      isActive: true,
      department: 'IT',
      photoPath: 'string'
    },
    {
      id: 2,
      name: 'Garima Gupta',
      gender: 'Female',
      email: 'garimaaayushigupta@gmail.com',
      phoneNumber: 9458734334,
      contactPreference: 'email',
      dateOfBirth: new Date('03/27/2019'),
      isActive: true,
      department: 'IT',
      photoPath: 'string'
    },
    {
      id: 2,
      name: 'Akancha Gupta',
      gender: 'Female',
      email: 'akanshagupta@gmail.com',
      phoneNumber: 9287382793,
      contactPreference: 'email',
      dateOfBirth: new Date('06/21/2019'),
      isActive: true,
      department: 'IT',
      photoPath: 'string'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
