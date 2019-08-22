import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  username:string;
  roles:Array<string>;
  jwt:string;

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post("http://localhost:9999/login",data, {observe:"response"});
  }
  saveToken(token){
    localStorage.setItem("token",token);
    this.jwt=token;
    this.parseJwt();
  }

  parseJwt(){
    let jwtHelper=new JwtHelperService();
    let jwtObject=jwtHelper.decodeToken(this.jwt);
    this.username=jwtObject.sub;
    this.roles=jwtObject.roles;
    console.log(this.isAdmin());
    console.log(this.isUser());

  }

  isAdmin(){
    return this.roles.indexOf("ADMIN")>=0;
  }
  isUser(){
    return this.roles.indexOf("USER")>=0;

  }
  isAuthenticated(){
    return this.roles;
  }
  logout(){
      localStorage.removeItem("token");
      this.roles=null;
  this.username=null;
  }
  loadToken(){
    this.jwt=localStorage.getItem("token");
    this.parseJwt();
  }
}
