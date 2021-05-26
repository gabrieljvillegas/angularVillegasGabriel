import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ComunicationService } from 'src/app/services/comunication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    private _comunicationService: ComunicationService
  ) {}

  loginForm = this.fb.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
  });

  username = this.loginForm.get('username');
  password = this.loginForm.get('password');

  loginStatus: boolean;
  userActive: User;

  loginUser(username: string, password: string) {
    this.userActive = this._usersService.findUser(username);

    if (
      this.userActive.username === username &&
      this.userActive.password === password
    ) {
      this.loginStatus = true;
      this._comunicationService.sendUserActive(this.userActive);
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit(): void {}
}
