import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {catchError, map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private catalogueService:CatalogueService,private router:Router) { }
  categories1:any[];
  idcat:string="0";
  ngOnInit() {
    this.catalogueService.getAllcategories().subscribe(data=> {
      this.categories1=(<any>data).Categories;
    });
}

  onGetProduits(c){
    this.router.navigateByUrl("/produits/"+c);
    this.idcat=c}

}
