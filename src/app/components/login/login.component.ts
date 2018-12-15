import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordHide = true;

  form = new FormGroup({
    'email': new FormControl(null, [
      Validators.required, Validators.maxLength(191)
    ]),
    'password': new FormControl(null, [
      Validators.required,Validators.maxLength(191)
    ])
  })

  constructor() { }

  ngOnInit() {

  }

}
