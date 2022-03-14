import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainMenuComponent } from './common/main-menu//main-menu.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';

import { MatButtonModule } from '@angular/material/button';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { SuppressionDonneeComponent } from './pages/suppression-donnee/suppression-donnee.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

import { ToolbarComponent } from './common/toolbar/toolbar.component';


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
    ToolbarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
