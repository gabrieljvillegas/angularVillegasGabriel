import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      nombre: 'Gabriel',
      apellido: 'Villegas',
      username: 'gabrielvillegas',
      password: '123456',
      country: 'Argentina',
      province: 'Mendoza',
    },
  ];

  setUser(user: User) {
    this.users.push(user);
  }

  getUser() {
    return this.users;
  }

  findUser(username: string): User {
    const found = this.users.find((user) => user.username === username);
    return found;
  }

  constructor() {}
}
