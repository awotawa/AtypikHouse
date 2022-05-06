import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

	title = 'Mon compte | Atypik House | Location de logement | France';
	currentUser: any;

	constructor(
		private metaService: Meta,
		private titleService: Title,
		private token: TokenStorageService) {
		this.addTag();
		this.titleService.setTitle(this.title);
	}

	addTag() {
		/*this.metaService.addTag({ charset: 'UTF-8' }); // Set en UTF 8
		this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' }); */ // Donne comme instruction au browser comment controler la dimension et l'échelle de la page
		this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
		this.metaService.addTag({ name: 'description', content: "Mon compte sur Atypik House, site de location de logement insolite en France" }); // Meta description de la page
		this.metaService.addTag({ property: 'og-type', content: "Site web" }); // Indique le type de l'objet
		this.metaService.addTag({ name: 'robots', content: 'noindex, nofollow' });  // Permet au robot d'indexer la page
		/* this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' }); */ // Titre pour réseau social
		/*this.metaService.addTag({ name: 'keywords', content: 'TypeScript, Angular' });*/ //Add keyword
		/* this.metaService.addTag({ property: 'og:title', content: "My Text" }) */ // Titre pour l'encadré dans les recherches
	}

	ngOnInit(): void {
		this.currentUser = this.token.getUser();

		let splitToken = this.currentUser.token.split('.')[1]
		let atobRes = JSON.parse(atob(splitToken));

		console.log(atobRes.roles );

	}

}
