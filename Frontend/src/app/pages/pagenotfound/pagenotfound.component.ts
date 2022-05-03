import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  title ='Page introuvable | Atypik House | Location de logement | France';

  constructor(private metaService:Meta, private titleService: Title) {
    //this.visibleImages = this.photoService.getImages()
    this.addTag();
    this.titleService.setTitle(this.title);
  }

  addTag() {
    this.metaService.addTag({ charset: 'UTF-8' }); // Set en UTF 8
    this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' }); // Donne comme instruction au browser comment controler la dimension et l'échelle de la page
    this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.addTag({ name: 'description', content: "Page introuvable" }); // Meta description de la page
    this.metaService.addTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet
    /*this.metaService.addTag({ name: 'robots', content: 'index,follow' }); */ // Permet au robot d'indexer la page
    /* this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' }); */ // Titre pour réseau social
    /*this.metaService.addTag({ name: 'keywords', content: 'TypeScript, Angular' });*/ //Add keyword
    /* this.metaService.addTag({ property: 'og:title', content: "My Text" }) */ // Titre pour l'encadré dans les recherches
  }

  ngOnInit(): void {
  }

}
