import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

	title = 'Mon compte | Atypik House | Location de logement | France';
	currentUser: any;

	private roles: string[] = [];
	isLoggedIn = false;
	showAdminBoard = false;
	showOwnerBoard = false;
	content?: string;
	//username?: string;

	constructor(
		private metaService: Meta,
		private titleService: Title,
		private token: TokenStorageService,
		private tokenStorageService: TokenStorageService,
		private adminService: AdminService,) {
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
		console.log(atobRes.username)

		/*console.log(atobRes.roles);*/
		/*if(atobRes.roles[0]=="ROLE_ADMIN"){
			this.showAdminBoard = true;
		}
		else if(atobRes.roles[0]=="ROLE_OWNER"){
			this.showOwnerBoard = true;
		}*/

		this.isLoggedIn = !!this.tokenStorageService.getToken();
		if (this.isLoggedIn) {
		  const user = this.tokenStorageService.getUser();
		  
		  this.roles = atobRes.roles;
		  console.log(this.roles)
		  this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
		  /*console.log(this.showAdminBoard)*/
		  this.showOwnerBoard = this.roles.includes('ROLE_OWNER');
		}

		this.adminService.getallUsers().subscribe({
			next: data => {
				this.content = data;
				console.log(data.roles)
			},
			error: err => {
			  //this.errorMessage = err.error.message;
			  //this.isLoginFailed = true;
			}
		  });
	}

	reloadPage(): void {
		window.location.reload();
	}


}
