
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";
import {NgProgress} from "@ngx-progressbar/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'catalogueproduitsweb';

  constructor(private router:Router,private authenticate:AuthenticationService,private progress:NgProgress){}
  logout(){
    this.authenticate.logout();
    this.router.navigateByUrl("/login");

  }

  isAuthenticated(){
     return this.authenticate.isAuthenticated();
  }


  isAdmin(){
    return this.authenticate.isAdmin();
  }
  isUser(){    return this.authenticate.isUser();


  }
ngOnInit(): void {
    this.authenticate.loadToken();

}

}

