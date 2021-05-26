import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { CountriesService } from 'src/app/services/countries.service';
import { UsersService } from 'src/app/services/users.service';
import { ConfirmedValidator } from 'src/app/shared/confirmedPassword';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    private _countriesService: CountriesService
  ) {}

  users = this._usersService.getUser();

  passwordMatch(p1: string, p2: string): boolean {
    return p1 === p2 ? true : false;
  }

  signinForm = this.fb.group(
    {
      firstName: new FormControl('', [Validators.required]),
      secondName: new FormControl('', [Validators.required]),
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
      confirmPassword: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
    },
    { validator: ConfirmedValidator('password', 'confirmPassword') }
  );

  countries = this._countriesService.getCountries();

  firstName = this.signinForm.get('firstName');
  secondName = this.signinForm.get('secondName');
  username = this.signinForm.get('username');
  password = this.signinForm.get('password');
  confirmPassword = this.signinForm.get('confirmPassword');
  country = this.signinForm.get('country');
  province = this.signinForm.get('province');

  newUser() {
    let newPerson: User = {
      firstName: this.firstName.value,
      secondName: this.secondName.value,
      username: this.username.value,
      password: this.password.value,
      country: this.country.value,
      province: this.province.value,
    };

    this._usersService.setUser(newPerson);

    console.log(this.users);
  }

  ngOnInit(): void {}
}
