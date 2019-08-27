import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // gender = 'female';  to set default value in radio-button
  constructor() { }

  ngOnInit() {
  }
  save(myForm: NgForm) {
    console.log(myForm.value);
  }
}
