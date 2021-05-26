import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder, private _usersService: UsersService) {}

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

  loginUser(username: string, password: string) {
    let userFound = this._usersService.findUser(username);

    if (userFound.username === username && userFound.password === password) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit(): void {}
}
