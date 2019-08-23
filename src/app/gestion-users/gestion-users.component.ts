import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  users: any[];

  constructor(private userService: UsersService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = <any>data;
    });
  }

}
