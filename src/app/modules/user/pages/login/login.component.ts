


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  imgUrl;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit(): void {

    this.validateForm = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['a1234567', [Validators.required]],
      imageCode: [null, [Validators.required]],
    });
  }
  submitForm(): void {

  }

}

