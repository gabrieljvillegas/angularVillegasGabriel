import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private fb: FormBuilder, private _usersService: UsersService) {}

  users = this._usersService.getUser();

  signinForm = this.fb.group({
    firstName: new FormControl(),
    secondName: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    country: new FormControl(),
    province: new FormControl(),
  });

  firstName = this.signinForm.get('firstName');
  secondName = this.signinForm.get('secondName');
  username = this.signinForm.get('username');
  password = this.signinForm.get('password');
  confirmPassword = this.signinForm.get('confirmPassword');
  country = this.signinForm.get('country');
  province = this.signinForm.get('province');

  newUser() {
    let newPerson: User = {
      nombre: this.firstName.value,
      apellido: this.secondName.value,
      username: this.username.value,
      password: this.password.value,
      country: this.country.value,
      province: this.province.value,
    };

    this._usersService.setUser(newPerson);
    console.log(this.users);
  }

  ngOnInit(): void {
    console.log(this.users);
  }
}
