import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {NgProgressModule} from '@ngx-progressbar/core';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import {NgProgressRouterModule} from '@ngx-progressbar/router'
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
    LoginComponent,
    GestionCategoriesComponent,
    GestionProduitsComponent,
    GestionUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    NgProgressRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
