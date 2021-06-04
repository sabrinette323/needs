import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AjouterProduitComponent } from './dash/ajouter-produit/ajouter-produit.component';
import { ListeClientsComponent } from './dash/liste-clients/liste-clients.component';
import { ListeProduitsComponent } from './dash/liste-produits/liste-produits.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { CommandefComponent } from './commandef/commandef.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';

const routes: Routes = [
  {
    path:"",
    component : LandingPageComponent
  },
  {
    path : "produits",
    component : ProduitsComponent
  },
  {
    path : "services",
    component : ServicesComponent
  },
  {
    path : "signin",
    component : SigninComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "ajouterproduit",
    component : AjouterProduitComponent
  },
  {
    path : "listeclients",
    component : ListeClientsComponent
  },
  {
    path : "listeproduits",
    component : ListeProduitsComponent
  },
  {
    path : "profil",
    component : ProfilComponent
  },
  {
    path:"commandef",
    component : CommandefComponent
  },
  {
    path:"detailsproduit/:id",
    component : ProduitDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
