import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  users: any[];
  modeAdd:boolean=false;
  constructor(private userService: UsersService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = <any>data;
    });

  }
  
  activer(u){
    this.userService.activer(u.username).subscribe(data=>{
      u.actived=true;
    });
  }
  desactiver(u){
    this.userService.desactiver(u.username).subscribe(data=>{
      u.actived=false;
    });
  }

  addUser(f){
        this.userService.AddUser(f).subscribe(data=>{
          this.users.push(data);
        });
        this.modeAdd=false;
  }
  AddRole(f){

  }

}
