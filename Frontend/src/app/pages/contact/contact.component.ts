import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
  // ad NgbAlertconfig to the component providers
})
export class ContactComponent implements OnInit {
  title ='Contact | Atypik House | Location de logement | France';

  alert:boolean=false;

  frmFinish: FormGroup;

  nom!: string;
  prenom!: string;
  adresse!: string;
  email: string | undefined;
  message: string | undefined;



  constructor(private formBuilder: FormBuilder, private metaService:Meta, private titleService: Title) {
    this.frmFinish = this.formBuilder.group({});
    this.addTag();
    this.titleService.setTitle(this.title);
  }

    // Définition des différentes balises pour le SEO
    addTag() {
      this.metaService.addTag({ charset: 'UTF-8' }); // Set en UTF 8
      this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' }); // Donne comme instruction au browser comment controler la dimension et l'échelle de la page
      this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
      this.metaService.addTag({ name: 'description', content: 'Contactez-nous ! Atypik House, site de location de logement insolite en France' }); // Meta description de la page
      this.metaService.addTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet
      /*this.metaService.addTag({ name: 'robots', content: 'index,follow' }); */ // Permet au robot d'indexer la page
      /* this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' }); */ // Titre pour réseau social
      /*this.metaService.addTag({ name: 'keywords', content: 'TypeScript, Angular' });*/ //Add keyword
      /* this.metaService.addTag({ property: 'og:title', content: "My Text" }) */ // Titre pour l'encadré dans les recherches
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
    const message =`Mon name est ${this.nom}.
    Mon prénom est ${this.prenom}.
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
    contactForm.resetForm()  
  }

}
