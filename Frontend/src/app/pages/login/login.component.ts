import { Component, OnInit, ElementRef } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  identifiant!: string;
  password!: string;
  public inputPassword = this.el.nativeElement;
  public imgPassword = this.el.nativeElement;

  private _shown = false;

  constructor(private fb: FormBuilder, private el: ElementRef) { }

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
