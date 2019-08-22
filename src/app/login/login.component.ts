import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login:any=null;
  constructor(private authentificationService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(data){
    this.authentificationService.login(data).subscribe(data=>{
      console.log(data);
      let jwt=data.headers.get('Authorization');
      if(jwt !=null){
        this.authentificationService.saveToken(jwt);
        this.router.navigateByUrl("/");
      }
      else{
        this.login=false;
      }
    },err=>{

    });
  }

}
