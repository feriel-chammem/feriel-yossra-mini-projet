import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ModificationComponent } from './modification/modification.component';

import { ZonetouristiqueComponent } from './zonetouristique/zonetouristique.component';

const routes: Routes = [
  
{path:'accueil', component:AccueilComponent},
{path:'zone/:id', component:ZonetouristiqueComponent},
{path:'contact', component:ContactComponent},
{path:'authentification', component:AuthentificationComponent},
{path:'modification/:id',component:ModificationComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'details',component:DetailsComponent},
 {path:'**', component:ErreurComponent},


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
