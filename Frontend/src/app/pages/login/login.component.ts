import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  identifiant!: string;
  password!: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
