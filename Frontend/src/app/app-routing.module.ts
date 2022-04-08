import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { RegisterComponent } from './auth/register/register.component';
import { SuppressionDonneeComponent } from './pages/suppression-donnee/suppression-donnee.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'politique-de-confidentialite', component: PolitiqueConfidentialiteComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'conditions-generales-utilisation', component: CGUComponent },
  { path: 'conditions-generales-vente', component: CGVComponent },
  { path: 'suppression-donnees', component: SuppressionDonneeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Re route lien qui n'existe pas sur page 404
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
