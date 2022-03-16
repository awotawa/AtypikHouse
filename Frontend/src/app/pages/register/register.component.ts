import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nom!: string;
  prenom!: string;
  email: string | undefined;

  Roles: any = ['Propriétaire/Locataire', 'Propriétaire', 'Locataire'];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
}