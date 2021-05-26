import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ComunicationService {
  userActive: User;

  sendUserActive(user: User) {
    this.userActive = user;
  }

  getUserActive(): User {
    return this.userActive;
  }

  constructor() {}
}
