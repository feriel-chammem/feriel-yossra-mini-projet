import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { DetailsComponent } from './details/details.component';
import { ZonetouristiqueComponent } from './zonetouristique/zonetouristique.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModificationComponent } from './modification/modification.component';
import {HttpClientModule} from '@angular/common/http'
import { PPipe } from './p.pipe';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ContactComponent,
    ErreurComponent,
    DetailsComponent,
    ZonetouristiqueComponent,
    AuthentificationComponent,
    ModificationComponent,
    PPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
   
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
