import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suppression-donnee',
  templateUrl: './suppression-donnee.component.html',
  styleUrls: ['./suppression-donnee.component.scss']
})
export class SuppressionDonneeComponent implements OnInit {

  frmFinish: FormGroup;

  name!: string;
  email: string | undefined;


  constructor(private formBuilder: FormBuilder) {
    this.frmFinish = this.formBuilder.group({});
  }

  ngOnInit(): void {
    // create api call
    // create the form based on api fields

    this.frmFinish = this.formBuilder.group({
      checkTerms: ['', Validators.requiredTrue],
  });

  }

  submitForm(){
    const message =`${this.name}
    ${this.email}`;

    //Récupère les valeurs de tous les champs du formulaire
    alert(message);
  }

}
