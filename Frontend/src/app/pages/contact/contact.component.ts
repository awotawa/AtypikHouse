import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
  // ad NgbAlertconfig to the component providers
})
export class ContactComponent implements OnInit {

  alert:boolean=false;

  frmFinish: FormGroup;

  name!: string;
  email: string | undefined;
  message: string | undefined;

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

  //Fonction test récupération valeur
  submitForm(){
    const message =`Mon name est ${this.name}.
    Mon email est ${this.email}.
    Mon message est : ${this.message}`;

    //Récupère les valeurs de tous les champs du formulaire
    alert(message);
    this.alert=true;
    this.frmFinish.reset();
  }

  //Fonction alert 
  closeAlert(){
    this.alert=false;
  }

  // Reset form after submit
  completeContact(contactForm :NgForm){
    contactForm.reset()  
  }

}
