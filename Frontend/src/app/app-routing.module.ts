import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { SuppressionDonneeComponent } from './pages/suppression-donnee/suppression-donnee.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'politique-de-confidentialite', component: PolitiqueConfidentialiteComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'conditions-generales-utilisation', component: CGUComponent },
  { path: 'conditions-generales-vente', component: CGVComponent },
  { path: 'suppression-donnees', component: SuppressionDonneeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
