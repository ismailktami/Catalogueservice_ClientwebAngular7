import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css']
})
export class GestionCategoriesComponent implements OnInit {
  categories:any[];
  categorytoedit:null;
  modeAdd:boolean=false;
  nameCategory:string;
  constructor(private catalogueService:CatalogueService,private router:Router) {
  }

  ngOnInit() {
    console.log("iniiiiit estion");
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

  save() {

    if (!this.modeAdd) {
      this.catalogueService.editCategorie(this.categorytoedit).subscribe(data => {
        this.categories.map(function (e) {
          if (e.id === (<any>data).id) {
            e.name = (<any>data).name;
          }
        });
        this.categorytoedit = null;
        this.catalogueService.editCategorie(this.categories);

      });
    }
    else {
      console.log("Add mode");
      this.catalogueService.addCategorie({"name": this.nameCategory}).subscribe(data => {
        this.categories.push(data);
      });

      this.modeAdd=false;
    }
  }

  editCategorie(id){
    this.router.navigateByUrl("/gestionproduits/"+id);

  }
}
