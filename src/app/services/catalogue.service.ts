import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthenticationService} from "./authentication.service";
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string="http://localhost:5555"
  constructor(private http:HttpClient,private authentication:AuthenticationService) {}

  getAllcategories() {
     return this.http.get(this.host + "/Allcategories",{responseType:"json"});
  }


  getAllProduitsByCategory(id:number){
    return this.http.get(this.host + "/Allproduits/"+id,{responseType:"json"});

  }

  removeCategorie(id){
    return this.http.delete(this.host+"/categories/"+id,{headers:{Authorization:localStorage.getItem("token")}});
  }

  editCategorie(data){
    return this.http.put(this.host+"/categories",data,{ headers: {Authorization:localStorage.getItem("token")}});
  }


}
