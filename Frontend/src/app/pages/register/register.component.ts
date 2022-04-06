import { Component, OnInit, ElementRef } from '@angular/core';
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

	public inputPassword = this.el.nativeElement;
	public inputRePassword = this.el.nativeElement;
	public imgPassword = this.el.nativeElement;

	private _shown = false;

	Roles: any = ['Propriétaire/Locataire', 'Propriétaire', 'Locataire'];
	constructor(private formBuilder: FormBuilder, private router: Router,
		private el: ElementRef) { }

	ngOnInit() { }

	//Redirection sur page inscription success
	onSubmit() {
		this.router.navigate(['/']);
	}

	visibilityPassword() {

		const myInputPassword = this.inputPassword.querySelector("input[name='password']");
		const myImgPassword = this.imgPassword.querySelector("img.imgVisibility1");
		this._shown = !this._shown;

		if (this._shown) {

			myInputPassword.setAttribute('type', 'test');
			myImgPassword.src = "../../assets/icons/passwordVisibility/visibility_off.svg";

		} else {

			myInputPassword.setAttribute('type', 'password');
			myImgPassword.src = "../../assets/icons/passwordVisibility/visibility.svg";
		}

	}

	visibilityConfirmPassword() {

		const myInputRePassword = this.inputRePassword.querySelector("input[name='repassword']");
		const myImgPassword = this.imgPassword.querySelector("img.imgVisibility2");
		this._shown = !this._shown;

		if (this._shown) {

			myInputRePassword.setAttribute('type', 'test');
			myImgPassword.src = "../../assets/icons/passwordVisibility/visibility_off.svg";

		} else {

			myInputRePassword.setAttribute('type', 'password');
			myImgPassword.src = "../../assets/icons/passwordVisibility/visibility.svg";
		}

	}

}