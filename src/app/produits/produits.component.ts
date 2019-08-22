import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any[];
  constructor(private catalogueService:CatalogueService,private route:ActivatedRoute,private router:Router) {

    router.events.subscribe(event=>{
      if(event instanceof  NavigationEnd){
        console.log(route.snapshot.params.id);
        let id=route.snapshot.params.id
        this.catalogueService.getAllProduitsByCategory(id).subscribe(data=>{
          this.produits=(<any>data).Produits;
        });
      }
    });
  }

  ngOnInit() {

  }


}
