import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {NgProgress} from "@ngx-progressbar/core";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private catalogueService:CatalogueService,private router:Router,private progress:NgProgress) { }
  categories1:any[];
  idcat:string="0";
  ngOnInit() {
    this.progress.start();
    this.catalogueService.getCategories().subscribe(data=> {
      this.categories1=data;
      this.progress.done();
    });
}

  onGetProduits(c){
    this.router.navigateByUrl("/produits/"+c);
    this.idcat=c}

}
