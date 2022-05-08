import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  title ='Créez votre annonce | Atypik House | Location de logement | France';
  isSuccessful = false;
	isSignUpFailed = false;
	errorMessage = '';
  isLoginFailed = false;
  isLoggedIn = false;
  isSubmit = false;

  alert:boolean=false;

  userForm: FormGroup;

  frmFinish: FormGroup;

  nom!: string;
  prenom!: string;
  adresse!: string;
  email: string | undefined;
  message: string | undefined;
  prix!: string;
  category!: string;
  owner!: string;

  tokenBackend! : string;
  roles: string[] = [];




  constructor(private formBuilder: FormBuilder, 
    private metaService:Meta, 
    private titleService: Title, 
    private recaptchaV3Service: ReCaptchaV3Service, 
    private authService: AuthService, private tokenStorage: TokenStorageService,
    private router:Router) {
    this.frmFinish = this.formBuilder.group({});
    this.addTag();
    this.titleService.setTitle(this.title);

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      category: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  public send(form: NgForm): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
  }
  handleToken(token: string): void {
    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.log(`[${token}]`);
    });
  }

  /*public send(form: NgForm): void {
    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.log(`Token [${token}] generated`);
    });
  }*/

    // Définition des différentes balises pour le SEO
    addTag() {
      this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
      this.metaService.addTag({ name: 'description', content: 'Créez votre annonce ! Atypik House, site de location de logement insolite en France' }); // Meta description de la page
      this.metaService.addTag({ property: 'og-type', content: "Site web"}); // Indique le type de l'objet
      this.metaService.addTag({ name: 'robots', content: 'noindex, nofollow' }); // Permet au robot d'indexer la page
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

  submitForm(){
    console.log(this.userForm.value);
    const { name, rate, description, address, owner, category } = this.userForm.value
		console.log(name, 
      address,
      category,
      rate, 
      description,
      owner
      );

		this.authService.offre(name, rate, description, address, owner, category).subscribe({
		  next: data => {
        console.log("gg mon bro")
        window.alert("Succès ! Votre annonce va être publié d'ici peu.")
        this.isSubmit = true;
        if (this.isSubmit = true){
          this.router.navigate(['/mon-compte']);
        }
		  },
		  error: err => {
			this.errorMessage = err.error.message;
			this.isLoginFailed = true;
		  }
		});


    this.alert=true;
    this.userForm.reset();
    this.frmFinish.reset();
  }
  

  //Fonction alert 
  closeAlert(){
    this.alert=false;
  }

  // Reset form after submit
  completeContact(userForm :NgForm){
    userForm.resetForm()  
  }
}
