import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {LoginComponent} from "./login/login.component";
import {GestionCategoriesComponent} from "./gestion-categories/gestion-categories.component";
import {GestionProduitsComponent} from "./gestion-produits/gestion-produits.component";
import {GestionUsersComponent} from "./gestion-users/gestion-users.component";

const routes: Routes = [
  {path:"produits/:id",component:ProduitsComponent},
  {path:"login",component:LoginComponent},
  {path:"gestioncategories",component:GestionCategoriesComponent},
  {path:"gestionproduits",component:GestionProduitsComponent},
  {path:"gestionusers",component:GestionUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
