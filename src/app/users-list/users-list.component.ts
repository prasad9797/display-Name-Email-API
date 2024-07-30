import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  userInfo: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((userData) => (this.userInfo = userData));
  }
}
