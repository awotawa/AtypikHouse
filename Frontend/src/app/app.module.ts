import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainMenuComponent } from './common/main-menu//main-menu.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';

import { MatButtonModule } from '@angular/material/button';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { SuppressionDonneeComponent } from './pages/suppression-donnee/suppression-donnee.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PreFooterComponent } from './common/pre-footer/pre-footer.component';
import { PostFooterComponent } from './common/post-footer/post-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LodgingComponent } from './pages/lodging/lodging.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LodgingDetailComponent } from './pages/lodging-detail/lodging-detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { PhotoServiceService } from './shared/services/photo-service.service';
import { ReserveFilterComponent } from './pages/lodging-detail/reserve-filter/reserve-filter.component';
import { ReservationService } from './shared/services/reservation.service';

import { NgxCaptchaModule } from 'ngx-captcha';
import { Meta } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomepageComponent,
    MainFooterComponent,
    ContactComponent,
    MentionsLegalesComponent,
    PolitiqueConfidentialiteComponent,
    CGUComponent,
    CGVComponent,
    SuppressionDonneeComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    PreFooterComponent,
    PostFooterComponent,
    LodgingComponent,
    LodgingDetailComponent,
    ReserveFilterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularMaterialModule,
    HttpClientModule,
    GoogleMapsModule,
    GalleriaModule,
    ButtonModule,
    NgbModule,
    NgxCaptchaModule
  ],
  providers: [ PhotoServiceService, ReservationService, Meta],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
