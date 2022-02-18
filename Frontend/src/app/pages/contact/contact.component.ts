import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name!: string;
  email: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // create api call
    // create the form based on api fields

  }

  submitForm(){
    const message =`Mon name est ${this.name}.
    Mon email est ${this.email}.
    Mon message est : ${this.message}`;

    //Récupère les valeurs de tous les champs du formulaire
    alert(message);
  }

}
