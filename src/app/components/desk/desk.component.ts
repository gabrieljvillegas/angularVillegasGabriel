import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit {
  constructor(private _comunicationService: ComunicationService) {}

  userActive: User = {
    firstName: 'Juan ',
    secondName: 'Villegas',
    username: 'gabrielvillegas',
    password: '123456',
    country: 'Argentina',
    province: 'Mendoza',
  };

  ngOnInit(): void {
    this.userActive = this._comunicationService.getUserActive();
    console.log(this.userActive);
  }
}
