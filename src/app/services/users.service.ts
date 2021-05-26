import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      firstName: 'Gabriel',
      secondName: 'Villegas',
      username: 'gabrielvillegas',
      password: '123456',
      country: 'Argentina',
      province: 'Mendoza',
    },
    {
      firstName: 'Giuliana',
      secondName: 'Moscetta',
      username: 'giulianamoscetta',
      password: '123456',
      country: 'Argentina',
      province: 'Mendoza',
    },
    {
      firstName: 'Juan',
      secondName: 'Perez',
      username: 'juanperez',
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
