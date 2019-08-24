import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

 produitToedit:Produit;
 produits:any[];

  modeAdd:boolean=false;
  idCategory:any;
  constructor(private router:Router,private route:ActivatedRoute,private catalogueService:CatalogueService) {
    router.events.subscribe(event=>{
      if(event instanceof  NavigationEnd){
        console.log(route.snapshot.params.id);
        let id=route.snapshot.params.id
        this.idCategory=id;
        this.catalogueService.getAllProduitsByCategory(id).subscribe(data=>{
          this.produits=(<any>data).Produits;
        });
      }
    });
  }


  ngOnInit() {

  }

  save(){
      if(this.modeAdd){
        console.log(this.produitToedit.toString());
        this.catalogueService.addProduitToCategory(this.produitToedit,this.idCategory).subscribe(data=>{
            this.produits.push(data);
          });
        this.modeAdd=false;
        this.produitToedit=null;
      }
      else{
        this.catalogueService.editProduitToCategory(this.produitToedit,this.idCategory).subscribe(data=>{
            this.produits.map(e=>{
              if(e.id==(<any>data).id){
                e.nom=(<any>data).nom;
                e.price=(<any>data).price;
              }
            })

        });
        this.modeAdd=false;
        this.produitToedit=null;
      }
  }

  deleteproduit(p){
    this.catalogueService.deleteProduitToCategory(p,this.idCategory).subscribe(data=>{
      console.log(data);
    });
  }

  initProduit(){
    this.produitToedit=new Produit('',0);
  }
}
export class Produit {
  id:string;
  nom:string;
  price:number;
  constructor(nom:string,price:number){
    this.nom=nom;
    this.price=price;
  }
  toString():string{
    return this.id + " ---" +this.nom+"----"+this.price;
  }
}
