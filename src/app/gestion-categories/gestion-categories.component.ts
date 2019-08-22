import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css']
})
export class GestionCategoriesComponent implements OnInit {
  categories:any[];
  categorytoedit:null;
  constructor(private catalogueService:CatalogueService) {
  }

  ngOnInit() {
    console.log("iniiiiit gestion");
    this.catalogueService.getCategories().subscribe(data=>{
      console.log(data);
      this.categories=data;
    }

    );

  }

  edit(id){
      this.catalogueService.editCategorie(id).subscribe(data=>{

      });

  0}

  remove(id){
    if(confirm("confirmer la suppression")){
        this.catalogueService.removeCategorie(id).subscribe(data=>{
          let pos = this.categories.map(function(e) { return e.id; }).indexOf((<any>data).id);
          this.categories.splice(pos,pos);
        });
      this.catalogueService.editCategorie(this.categories);
    }

  }

  save(){
        this.catalogueService.editCategorie(this.categorytoedit).subscribe(data=>{
          this.categories.map(function(e) { if(e.id===(<any>data).id){
            e.name=(<any>data).name;
          } });
          this.categorytoedit=null;
          this.catalogueService.editCategorie(this.categories);

        });
  }
}
