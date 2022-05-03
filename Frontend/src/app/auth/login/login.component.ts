import { Component, OnInit, ElementRef } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';

import { Meta, Title } from '@angular/platform-browser';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title ='Connexion | Atypik House | Location de logement | France';

  identifiant!: string;
  password!: string;
  public inputPassword = this.el.nativeElement;
  public imgPassword = this.el.nativeElement;

  private _shown = false;

  constructor(private fb: FormBuilder, private el: ElementRef, private metaService:Meta, private titleService: Title, private recaptchaV3Service: ReCaptchaV3Service) { 
    this.addTag();
    this.titleService.setTitle(this.title);
  }

  //Génération du token
  public login(form: NgForm): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
  }
  handleToken(token: string): void {
    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.log(`[${token}]`);
    });
  }

  addTag() {
    this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
    this.metaService.addTag({ name: 'description', content: "Connectez vous sur Atypik House, site de location de logement insolite en France" }); // Meta description de la page
    this.metaService.addTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet
    /*this.metaService.addTag({ name: 'robots', content: 'index,follow' }); */ // Permet au robot d'indexer la page
    /* this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' }); */ // Titre pour réseau social
    /*this.metaService.addTag({ name: 'keywords', content: 'TypeScript, Angular' });*/ //Add keyword
    /* this.metaService.addTag({ property: 'og:title', content: "My Text" }) */ // Titre pour l'encadré dans les recherches
  }


  ngOnInit(): void {
  }


  visibilityPassword() {
    
    const myInputPassword = this.inputPassword.querySelector("input[name='password']");
    const myImgPassword = this.imgPassword.querySelector("img.imgVisibility");
    this._shown = !this._shown;

    if (this._shown) {
      
      myInputPassword.setAttribute('type', 'test');
      myImgPassword.src = "../../assets/icons/passwordVisibility/visibility_off.svg";    

    } else {

      myInputPassword.setAttribute('type', 'password');
      myImgPassword.src = "../../assets/icons/passwordVisibility/visibility.svg";      
    }
    
  }
}
