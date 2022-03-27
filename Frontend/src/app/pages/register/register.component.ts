import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

//Redirection on submit
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //Initialisation des variables associé au register form pour pouvoir contrôler les champs associés
  nom!: string;
  prenom!: string;
  email: string | undefined;
  password!: string;
  repassword!: string;
  adresse!: string;
  date!: string;
  role!: string;

  Roles: any = ['Propriétaire/Locataire', 'Propriétaire', 'Locataire'];
  constructor(private formBuilder: FormBuilder, private router: Router) {

   }

  //Redirection sur page inscription success
  onSubmit(){
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }

}